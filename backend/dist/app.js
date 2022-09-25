"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const link_1 = __importDefault(require("./routes/link"));
const body_parser_1 = __importDefault(require("body-parser"));
// cors permite que uma aplicação acesse de outra porta 
// diferente do backend
// O CORS (Cross-origin Resource Sharing) é um mecanismo 
// usado para adicionar cabeçalhos HTTP que informam aos
//  navegadores para permitir que uma aplicação Web seja
//  executada em uma origem e acesse recursos de outra origem 
// diferente. Esse tipo de ação é chamada de requisição cross-origin HTTP
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(link_1.default);
exports.default = app;
