const dbConnect = require('./mongoDb')

const deleteData = async () => {
    console.log('Delete func')
    const db = await dbConnect();
    const result = db.deleteMany({
        brand: "Oneplus"
    })
}
deleteData();