import { mongoose } from 'mongoose';

const ConnectDB = async (url) => {
   try {
     const DB_OPTIONS = {
       dbName: "school",
     };
     await mongoose.connect(url, DB_OPTIONS);
     console.log("DB connected");
   } catch (error) {
     console.error("DB connection error:", error);
   }
 };

export default ConnectDB;