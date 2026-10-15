const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function connectDatabase() {
    try {
        await client.connect();

        console.log("MongoDB conectado com sucesso!");

        return client.db(process.env.MONGODB_DATABASE);
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
        throw error;
    }
}

module.exports = {
    client,
    connectDatabase
};