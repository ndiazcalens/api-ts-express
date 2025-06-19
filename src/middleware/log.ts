import { NextFunction, Request, Response } from "express";


//los middleware son fuunciones que van a estar en la mitad entre la ruta y el controlador, como algo que va a estar "observando"
//las cosas que estan pasando ej: saber que peticiones se estan realizando, proteger rutas que se accedan mediante un token de sesion
const logMiddleware = (req:Request, res:Response, next:NextFunction)=>{
    const header = req.headers;
    const userAgent = header["user-agent"];//user agent es desde donde se esta haciendo la peticion(que cliente)
    console.log(userAgent);
    next(); //si dejo esto simplemente va a hacer que siga el flujo normal de req y res, si no lo pongo lo va a frenar y el servidor se va a quedar en cargando
    //res.send("RESPONSE DESDE MIDDLEWARE");
};

//este middleware hace que se sepa desde donde se hace la peticion desde que cliente, en este caso thunder client

export { logMiddleware };