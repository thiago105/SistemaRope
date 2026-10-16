import Pedidos from "../../models/Pedidos.js";
import Produtos from "../../models/Produtos.js";

// ================================
// PEDIDOS

// Criar pedido
export async function createPedido(data) {
    const pedido = await Pedidos.create({
        numeroPedido: data.numeroPedido,
        cliente: data.cliente,
        dataDoPedidoRealizado: data.dataDoPedidoRealizado,
        prazoEntrega: data.prazoEntrega,
        cidade: data.cidade,
        estado: data.estado,
        vendedor: data.vendedor,

        // Recebe a lista completa de produtos do pedido
        itens: data.itens,

        valor: data.valor,
        observacoesDoPedido: data.observacoesDoPedido,
        observacaoDeUrgencia: data.observacaoDeUrgencia ?? null,
        status: data.status ?? "NAO INICIADO",
        tramagem: data.tramagem,
    });

    return pedido;
}

// Buscar vários pedidos
export async function findPedidos(query = {}, fields = null) {
    return await Pedidos.find(query, fields);
}

// Buscar um pedido
export async function findOnePedidos(query = {}, fields = null) {
    return await Pedidos.findOne(query, fields);
}

// Contar pedidos
export async function countPedidos(query = {}) {
    return await Pedidos.countDocuments(query);
}

// Atualizar um pedido
export async function updateOnePedidos(query, update) {
    return await Pedidos.findOneAndUpdate(
        query,
        update,
        {
            new: true,
            runValidators: true,
        }
    );
}

// Excluir um pedido pelo número
export async function destroyOnePedidos(numeroPedido) {
    return await Pedidos.findOneAndDelete({
        numeroPedido: numeroPedido,
    });
}


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