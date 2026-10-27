import Produtos from "../../models/Produtos.js";

// ================================
// PRODUTOS

// Criar produto
export async function createProdutos(data) {
    const produto = await Produtos.create({
        categoria: data.categoria,
        nome: data.nome,
        imagens: data.imagens,
        ativo: data.ativo ?? true,
    });

    return produto;
}

// Buscar vários produtos
export async function findProdutos(query = {}, fields = null) {
    return await Produtos.find(query, fields);
}

// Buscar um produto
export async function findOneProdutos(query = {}, fields = null) {
    return await Produtos.findOne(query, fields);
}

// Contar produtos
export async function countProdutos(query = {}) {
    return await Produtos.countDocuments(query);
}

// Atualizar um produto
export async function updateOneProdutos(query, update) {
    return await Produtos.findOneAndUpdate(
        query,
        update,
        {
            new: true,
            runValidators: true,
        }
    );
}

// Excluir um produto pelo ID
export async function destroyOneProdutos(id) {
    return await Produtos.findByIdAndDelete(id);
}