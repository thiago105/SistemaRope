import Router from 'express';

import Pedidos from './app/controllers/PedidosController.js';
import Produtos from './app/controllers/ProdutosController.js'

const routes = new Router();

//PEDIDOS
routes.post('/pedidos', Pedidos.pedidos);
routes.get('/pedidos', Pedidos.pedidos);
routes.put('/pedidos', Pedidos.pedidos);
routes.delete('/pedidos', Pedidos.pedidos);


//PRODUTOS
routes.post('/produtos', Produtos.produtos);
routes.get('/produtos', Produtos.produtos);
routes.put('/produtos', Produtos.produtos);
routes.delete('/produtos', Produtos.produtos);

