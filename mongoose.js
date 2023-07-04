const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});
const saveInDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
  const productsModel = mongoose.model("products", productSchema);
  let data = new productsModel({
    name: "11 Pro",
    price: 1000,
    brand: "OnePlus",
    category: "mobile",
  });
  let result = await data.save();
  console.log("result", result);
};
// saveInDB();

const updateInDb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
  const productsModel = mongoose.model("products", productSchema);
  let data = await productsModel.updateMany(
    { name: "11 Pro" },
    { $set: { price: 700 } }
  );
  console.log("data", data);
};
// updateInDb();

const deleteInDb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
  const productsModel = mongoose.model("products", productSchema);
  let data = await productsModel.deleteOne({ name: "11 Pro" });
  console.log("data", data);
};
// deleteInDb();

const findInDb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
  const productsModel = mongoose.model("products", productSchema);
  let data = await productsModel.find({ name: "11 Pro" });
  console.log("data", data);
};
findInDb();