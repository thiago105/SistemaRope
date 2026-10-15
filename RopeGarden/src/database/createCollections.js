const { connectDatabase, client } = require("./connection");

async function createCollections() {
    try {
        const db = await connectDatabase();

        const collections = [
            "clientes",
            "pedidos",
            "status",
            "usuarios",
            "vendedores"
        ];

        const existingCollections = await db
            .listCollections()
            .toArray();

        const existingNames = existingCollections.map(
            collection => collection.name
        );

        for (const collection of collections) {

            if (!existingNames.includes(collection)) {
                await db.createCollection(collection);

                console.log(
                    `Collection "${collection}" criada com sucesso!`
                );
            } else {
                console.log(
                    `Collection "${collection}" já existe.`
                );
            }
        }

    } catch (error) {
        console.error("Erro ao criar collections:", error);
    } finally {
        await client.close();
    }
}

createCollections();