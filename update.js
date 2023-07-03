const dbConnect = require("./mongoDb");

const update = async () => {
  console.log("Update func");
  const db = await dbConnect();
  const update = db.updateMany(
    { name: "9 Pro" },
    { $set: { name: "note 9 pro pro" } }
  );
};
update();
