const mongoose = require("mongoose");

const main = async () => {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect("mongodb+srv://enriquevierne:jceXEdrBfQ71066h@cluster0.mrujmxx.mongodb.net/?retryWrites=true&w=majority")

    console.log("Connected to data");
  } catch (error) {
    console.log(error);
  }
};

module.exports = main