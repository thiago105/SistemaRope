import * as Repository from '../../repository/index';
import * as Utils from '../../../utils/index';

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