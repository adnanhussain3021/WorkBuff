import { createClerkClient } from "@clerk/backend";
import dotenv from "dotenv";
dotenv.config();
const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

async function check() {
  try {
     const users = await clerkClient.users.getUserList({ emailAddress: ["adityagiri@gmail.com"] });
     if (users.data.length > 0) {
        console.log(JSON.stringify(users.data[0], null, 2));
     } else {
        console.log("Not found");
     }
  } catch(err) {
     console.log(err);
  }
}
check();
