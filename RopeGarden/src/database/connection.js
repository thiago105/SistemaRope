
const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DATABASE;

if (!uri) {
    throw new Error("MONGODB_URI não foi definida no arquivo .env");
}

if (!databaseName) {
    throw new Error("MONGODB_DATABASE não foi definida no arquivo .env");
}

const client = new MongoClient(uri);

async function connectDatabase() {
    try {
        await client.connect();

        console.log("MongoDB conectado com sucesso!");

        return client.db(databaseName);
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
        throw error;
    }
}

module.exports = {
    client,
    connectDatabase,
};
