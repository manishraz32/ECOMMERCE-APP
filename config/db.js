import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log("try to connect to db.....");
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To Mongodb Database ${conn.connection.host}`);
    } catch (error) {

    }
}


export default connectDB;