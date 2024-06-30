import mongoose from "mongoose";

let isConnected = false;

async function dbConnect() {
    // if(isConnected) {
    //     console.log("Already have connected with database.");
    //     return;
    // }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {} )
        // isConnected = db.connections[0].readyState

        console.log("DB connected successfully", db.connections[0]);
    } catch (error) {
        console.log("Db Connection failed", error);
        process.exit(1)
    }
}

export default dbConnect;