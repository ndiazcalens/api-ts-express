import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import { router } from './routes';//aca esta importando el router del archivo index.ts solo que al ser index no hace falta indicarle nada, lo toma como el archivo inicial
import db from './config/mongo'



const app = express();
const PORT = process.env.PORT

app.use(cors()); //protege a los users de ataques maliciosos 
app.use(express.json()); //middleware que transforma el req.body a un json

app.use(router)

db().then(()=> console.log("conexion ready"));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


