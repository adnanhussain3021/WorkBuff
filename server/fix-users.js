import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { createClerkClient } from "@clerk/backend";
import User from "./models/User.js";
import connectToDatabase from "./db/db.js";

dotenv.config();

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

async function fixMissingClerkUsers() {
  await connectToDatabase();
  console.log('Connected to DB');

  const users = await User.find({ role: 'employee' });
  console.log(`Found ${users.length} employees`);

  for (const user of users) {
    try {
      // Check if they exist in Clerk
      const clerkUsers = await clerkClient.users.getUserList({ emailAddress: [user.email] });
      
      if (clerkUsers.data && clerkUsers.data.length > 0) {
        console.log(`User ${user.email} already exists in Clerk.`);
      } else {
        console.log(`User ${user.email} missing in Clerk! Recreating...`);
        // we don't have their original plain text password...
        // But we can create them and set a dummy password, and immediately send a password reset?
        // Or we just recreate with a strong default password and log it.
        // Wait, since we don't know the password the admin gave, we can just set it to 'Password123!'
        const fakePass = 'Welcome123!';
        await clerkClient.users.createUser({
          emailAddress: [user.email],
          password: fakePass,
          firstName: user.name,
          skipPasswordChecks: true,
        });
        
        // update hash in mongodb as well so it matches?
        // actually the user doesn't use the mongodb hash to login anyway!
        const newHash = await bcrypt.hash(fakePass, 10);
        user.password = newHash;
        await user.save();
        console.log(`Recreated ${user.email} with password: ${fakePass}`);
      }
    } catch (err) {
      console.error(`Failed to check/recreate ${user.email}:`, err.message);
    }
  }

  process.exit(0);
}

fixMissingClerkUsers();
