import { createClerkClient } from "@clerk/backend";
import dotenv from "dotenv";

dotenv.config();

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

async function check() {
  try {
    const user = await clerkClient.users.createUser({
      emailAddress: ['test_admin_created_12345@example.com'],
      password: 'StrongPassword123!',
      firstName: 'TestUser',
      skipPasswordChecks: true,
    });
    console.log('Verification:', JSON.stringify(user.emailAddresses[0].verification, null, 2));
  } catch (err) {
    console.error('Error creating user:', JSON.stringify(err, null, 2));
  }
}

check();
