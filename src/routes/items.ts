//los archivos routes solo contienen LOGICA DE LA RUTA
import { Router, Request, Response } from "express";
import { getItem, postItem, updateItem, deleteItem, getItems } from "../controllers/itemController";
import { logMiddleware } from "../middleware/log";

const router = Router();

/*
https:url/items [GET]
*/
//elimino el prefijo items de la ruta porque se maneja de manera dinamica desde index.ts, index ts apunta a este archivo y completa
//automaticamente(dinamicamente) el prefijo de la ruta con la funcion readdirSync()..
router.get('/', logMiddleware, getItems);//el logMiddleware sirve para saber desde que cliente se hace la peticion

router.get('/:id', getItem);

router.post('/', postItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);
//cada funcion viene del controlador que CONTROLA que hace la ruta

export { router };