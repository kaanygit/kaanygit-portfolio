import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const url=process.env.MONGODB_URL as string;

let connection:typeof mongoose;

const startDatabase=async()=>{
    if(!connection)connection=await mongoose.connect(url);
    return connection;
};

export default startDatabase;