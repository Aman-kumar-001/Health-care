const mongoose = require('mongoose')

const ConnectDB = async (url) => {
   try {
     const DB_OPTIONS = {
       dbName: "HealthCare",
     };
     await mongoose.connect(url, DB_OPTIONS).then(()=>{
      console.log("DB connected");
     })
     
   } catch (error) {
     console.error("DB connection error:", error);
   }
 };

module.exports = ConnectDB;