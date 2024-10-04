const mongoose = require("mongoose");
const initData = require ("./data.js");
const Listing = require ("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"66ff4b569e2bd17c41e3837d "}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();

// 66ff4b569e2bd17c41e3837d

// demo3=66f111244abd9aa22fe64eb3