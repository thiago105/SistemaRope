import mongoose from "mongoose";
import { connectDatabase } from "./connection.js";

async function createCollections() {
    try {
        await connectDatabase();

        const db = mongoose.connection.db;

        const collectionDesejada = "pedidos";

        // Consultar as collections existentes
        const existingCollections = await db
            .listCollections({}, { nameOnly: true })
            .toArray();

        const existingNames = existingCollections.map(
            (collection) => collection.name
        );

        // Criar a collection pedidos, caso não exista
        if (!existingNames.includes(collectionDesejada)) {
            await db.createCollection(collectionDesejada);

            console.log(
                `Collection "${collectionDesejada}" criada com sucesso!`
            );
        } else {
            console.log(
                `Collection "${collectionDesejada}" já existe.`
            );
        }

        // Collections antigas que não serão utilizadas
        const collectionsAntigas = [
            "clientes",
            "status",
            "usuarios",
            "vendedores",
        ];

        // Excluir as collections antigas
        for (const collection of collectionsAntigas) {
            if (existingNames.includes(collection)) {
                await db.dropCollection(collection);

                console.log(
                    `Collection "${collection}" removida com sucesso!`
                );
            }
        }

        console.log("Organização do banco finalizada!");
    } catch (error) {
        console.error(
            "Erro ao organizar as collections:",
            error.message
        );

        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

createCollections();
