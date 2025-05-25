const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
} 

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const initdb = async () => {
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({ ...obj, owner: "683166f71aca974c9374f55d" }))
    await Listing.insertMany(initdata.data);
    console.log("Database initialized with sample listings!");
};
initdb();