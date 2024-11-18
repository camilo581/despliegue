const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = async () => {
    try {
        if (!process.env.MONGODB_URL) {
            console.error("Error: MONGODB_URL no está definida en el archivo .env");
            process.exit(1);
        }

        mongoose.set("strictQuery", true);

        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Conexión exitosa a MongoDB");
    } catch (err) {
        console.error("Error al conectar a MongoDB:", err.message);
        process.exit(1);
    }
};

module.exports = dbconnect;





