import express from 'express';

import linksRouter  from './routes/link'

import bodyParser from 'body-parser'

// cors permite que uma aplicação acesse de outra porta 
// diferente do backend

// O CORS (Cross-origin Resource Sharing) é um mecanismo 
// usado para adicionar cabeçalhos HTTP que informam aos
//  navegadores para permitir que uma aplicação Web seja
//  executada em uma origem e acesse recursos de outra origem 
// diferente. Esse tipo de ação é chamada de requisição cross-origin HTTP

import cors from 'cors'


const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(linksRouter);



export default app;