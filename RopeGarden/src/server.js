
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectDatabase } from "./database/connection.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rota temporária para testar o servidor
app.get("/health", (req, res) => {
  res.status(200).json({
    sucesso: true,
    mensagem: "Servidor RopeGarden funcionando!",
  });
});

// Inicia o servidor somente após conectar ao MongoDB
async function startServer() {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`Servidor RopeGarden rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Não foi possível iniciar o servidor:", error.message);
    process.exitCode = 1;
  }
}

startServer();
