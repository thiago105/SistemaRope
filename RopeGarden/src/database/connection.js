import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DATABASE;

// Validar as variáveis de ambiente
if (!uri) {
    throw new Error(
        "MONGODB_URI não foi definida no arquivo .env"
    );
}

if (!databaseName) {
    throw new Error(
        "MONGODB_DATABASE não foi definida no arquivo .env"
    );
}

// Conectar ao MongoDB
export async function connectDatabase() {
    try {
        await mongoose.connect(uri, {
            dbName: databaseName,
        });

        console.log("MongoDB conectado com sucesso!");

        return mongoose.connection;
    } catch (error) {
        console.error(
            "Erro ao conectar ao MongoDB:",
            error.message
        );

        throw error;
    }
}

export default mongoose;