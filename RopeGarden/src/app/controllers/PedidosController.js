import * as UseCase from '../useCases/index.js'

class PedidosController {
  async pedidos(req, res) {
    try {
      const result = await UseCase.pedidos.index(req);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(401).json(err);
    }
  };

};

export default new PedidosController();