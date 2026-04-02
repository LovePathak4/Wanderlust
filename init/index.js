const mongoose = require('mongoose');
const initData=require('./data.js');
const Listing=require('../models/listing.js');

const MONGO_URL = "mongodb://localhost:27017/wanderlust";


main().then(() => {
    console.log('connected to database');
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
        await Listing.deleteMany({});
        console.log('Existing listings cleared.');
        initData.data = initData.data.map((obj) => ({
         ...obj,
        owner: "69ae4b7d39a88e3a84f8f532" // Replace with actual user ID
     }));
        await Listing.insertMany(initData.data);
        console.log('Database initialized with sample listings.');  
  
};

initDB();






