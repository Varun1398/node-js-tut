const dbConnect = require("./mongoDb");

const insert = async () => {
  const db = await dbConnect();
  const result = db.insertMany([
    {
      name: "9 Pro",
      brand: "Oneplus",
      Price: 200,
      category: "mobile",
    },
    {
      name: "note 9",
      brand: "MI",
      Price: 100,
      category: "Mobile",
    },
  ]);
  console.log("insert func");
};
insert();
