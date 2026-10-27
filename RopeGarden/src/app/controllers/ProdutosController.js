import * as UseCase from '../useCases/index.js'

class ProdutosController {
  async produtos(req, res) {
    try {
      const result = await UseCase.produtos.index(req);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(401).json(err);
    }
  };

};

export default new ProdutosController();