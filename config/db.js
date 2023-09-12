const mongoose = require('mongoose');

//set up configuration option to enfore strict query structure
mongoose.set("strictQuery", true);

const connectToDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Monogdb connection established : ${conn.connection.host}`)

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectToDB;