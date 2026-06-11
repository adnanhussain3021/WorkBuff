
import mongoose from "mongoose";

let isConnected = false;

const connectToDatabase = async() => {
    if (isConnected) {
        console.log('✅ Reusing existing MongoDB connection');
        return true;
    }
    
    try {
        if (!process.env.MONGODB_URL || process.env.MONGODB_URL.includes('your_mongodb_cluster_url')) {
            console.error('❌ MONGODB_URL is missing or invalid in your secrets.');
            return false;
        }
        const db = await mongoose.connect(process.env.MONGODB_URL);
        isConnected = db.connections[0].readyState === 1;
        console.log('✅ Connected to MongoDB');
        return true;
    }
    catch(error) {
        if (error.message && error.message.includes('MongooseServerSelectionError')) {
            console.error('\n❌ MONGODB CONNECTION FAILED: IP Not Whitelisted or Invalid URL');
        } else {
            console.error('\n❌ MONGODB CONNECTION FAILED:', error.message);
        }
        return false;
    }
}
export default connectToDatabase;