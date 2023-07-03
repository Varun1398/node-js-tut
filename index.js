const dbConnect = require('./mongoDb')

// Via Promise
// dbConnect().then((response) => {
//   response
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log("data", data);
//     });
// });

// Via Async Await
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log("data", data);
};
main();