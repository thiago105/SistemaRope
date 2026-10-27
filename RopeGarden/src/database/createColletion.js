import mongoose from "mongoose";
import { connectDatabase } from "./connection.js";

async function createCollections() {
    try {
        await connectDatabase();

        const db = mongoose.connection.db;

        const collectionsDesejadas = [
            "pedidos",
            "produtos",
        ];

        const collectionsAntigas = [
            "clientes",
            "status",
            "usuarios",
            "vendedores",
        ];

        // Consultar collections existentes
        const existingCollections = await db
            .listCollections({}, { nameOnly: true })
            .toArray();

        const existingNames = existingCollections.map(
            (collection) => collection.name
        );

        // Criar collections necessárias
        for (const nome of collectionsDesejadas) {
            if (!existingNames.includes(nome)) {
                await db.createCollection(nome);

                console.log(
                    `Collection "${nome}" criada com sucesso!`
                );
            } else {
                console.log(
                    `Collection "${nome}" já existe.`
                );
            }
        }

        // Remover collections antigas
        for (const nome of collectionsAntigas) {
            if (existingNames.includes(nome)) {
                await db.dropCollection(nome);

                console.log(
                    `Collection "${nome}" removida com sucesso!`
                );
            }
        }

        console.log(
            "Organização do banco RopeGarden concluída!"
        );
    } catch (error) {
        console.error(
            "Erro ao organizar o banco:",
            error.message
        );

        process.exitCode = 1;
    } finally {
        await mongoose.disconnect();
    }
}

createCollections();
