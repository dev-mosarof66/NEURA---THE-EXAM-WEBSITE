import mongoose from "mongoose"

const dbConfig = async () => {


    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/neura`)
        console.log("Database connected successfully at host:", connectionInstance.connection.host);
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
}
export default dbConfig;