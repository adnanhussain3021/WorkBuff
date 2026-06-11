
import mongoose from "mongoose";

const connectToDatabase = async() => {
    try {
        if (!process.env.MONGODB_URL || process.env.MONGODB_URL.includes('your_mongodb_cluster_url')) {
            console.error('❌ MONGODB_URL is missing or invalid in your secrets.');
            return false;
        }
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('✅ Connected to MongoDB');
        return true;
    }
    catch(error) {
        if (error.message && error.message.includes('MongooseServerSelectionError')) {
            console.error('\n❌ MONGODB CONNECTION FAILED: IP Not Whitelisted or Invalid URL');
            console.error('If you are using MongoDB Atlas, ensure your Network Access allows connection from anywhere (0.0.0.0/0).');
            console.error('Since this app is hosted dynamically, you must whitelist all IPs for it to connect.\n');
            process.exit(1);
        } else if (error.message && error.message.includes('bad auth')) {
            console.error('\n❌ MONGODB CONNECTION FAILED: Authentication Failed');
            console.error('Your username or password in the MONGODB_URL environment variable is incorrect.');
            console.error('Please check your MongoDB Atlas Database Access credentials.\n');
            process.exit(1);
        } else {
            console.error('\n❌ MONGODB CONNECTION FAILED:', error.message);
            process.exit(1);
        }
        return false;
    }
}
export default connectToDatabase