import * as Repository from '../../repository/index.js';
import * as Utils from '../../../ultils/index.js';

export async function index(payload) {
  try {

    return{
        statusCode: 200,
        sucess: true,
        message: "solicitacao realizada com sucesso.",
        data: {

        }
    }
   } catch (error) {
    throw ({ message: error.message ?? "Erro na solicitaÃ§Ã£o !" })
  };
};