import { Router, Request, Response } from "express";
import { getOrders } from "../controllers/ordersController";
import { checkSession } from "../middleware/session";

/**a esta ruta solo se puede acceder si hay una session activa 
 * osea que tenga un JWT valido
*/


const router = Router();

router.get('/', checkSession, getOrders)


export { router };