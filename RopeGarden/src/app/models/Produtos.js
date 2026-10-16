
import mongoose from "mongoose";

const ProdutosSchema = new mongoose.Schema(
    {
        categoria: {
            type: String,
            enum: [
                "BALANCOS",
                "BANQUETAS",
                "BISTROS",
                "CADEIRAS",
                "MESAS",
                "CHAISES",
                "ESPREGUICADEIRAS",
                "MESAS_DE_CENTRO",
                "PUFF",
                "OMBRELONES",
                "POLTRONAS",
                "REDES",
                "TAPETES",
                "SOFAS",
            ],
            required: true,
        },

        nome: {
            type: String,
            required: true,
            trim: true,
        },

        imagens: [
            {
                url: {
                    type: String,
                    required: true,
                },

                descricao: {
                    type: String,
                    trim: true,
                    default: "",
                },
            },
        ],

        ativo: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model(
    "Produto",
    ProdutosSchema,
    "produtos"
);
