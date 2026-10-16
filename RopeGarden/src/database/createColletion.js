
const { connectDatabase, client } = require("./connection");

async function createCollections() {
    try {
        const db = await connectDatabase();
        const collectionDesejada = "pedidos";
        const existingCollections = await db
            .listCollections()
            .toArray();

        const existingNames = existingCollections.map(
            (collection) => collection.name
        );

        // Cria a collection pedidos, caso ela ainda não exista.
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

        // Collections antigas que não serão mais utilizadas.
        const collectionsAntigas = [
            "clientes",
            "status",
            "usuarios",
            "vendedores",
        ];

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
            error
        );
    } finally {
        await client.close();
    }
}

createCollections();
