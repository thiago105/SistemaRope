
import mongoose from "mongoose";

const PedidosSchema = new mongoose.Schema(
    {
        numeroPedido: {
            type: Number,
            required: true,
            unique: true,
            min: 1,
        },

        cliente: {
            type: String,
            required: true,
            trim: true,
        },

        dataDoPedidoRealizado: {
            type: Date,
            default: Date.now,
        },

        prazoEntrega: {
            type: Date,
            required: true,
        },

        cidade: {
            type: String,
            required: true,
            trim: true,
        },

        estado: {
            type: String,
            required: true,
            uppercase: true,
            trim: true,
        },

        vendedor: {
            type: String,
            required: true,
            trim: true,
        },

        itens: [
            {
                quantidade: {
                    type: Number,
                    required: true,
                    min: 1,
                },

                descricao: {
                    type: String,
                    required: true,
                    trim: true,
                },

                status: {
                    type: String,
                    enum: [
                        "NAO INICIADO",
                        "CORTANDO/DOBRANDO",
                        "SOLDANDO",
                        "ACABAMENTO/PINTURA",
                        "TRAMADO",
                        "EMBALAGEM",
                        "EMBALADO",
                    ],
                    default: "NAO INICIADO",
                    required: true,
                },
            },
        ],

        valor: {
            type: Number,
            required: true,
            min: 0,
        },

        observacoesDoPedido: {
            type: String,
            trim: true,
            default: "",
        },

        observacaoDeUrgencia: {
            type: String,
            enum: [
                "URGENTE",
                "NAO ATRASAR",
                "PRIORIDADE",
            ],
            default: null,
        },

        status: {
            type: String,
            enum: [
                "NAO INICIADO",
                "FINALIZANDO",
                "EM ROTA",
                "ENTREGUE",
                "CANCELADO",
            ],
            default: "NAO INICIADO",
            required: true,
        },

        tramagem: {
            type: String,
            enum: ["CORDA", "TRICO"],
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model(
    "Pedido",
    PedidosSchema,
    "pedidos"
);
