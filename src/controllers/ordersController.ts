import { Request, Response } from "express";
import { handleHttp } from "../utils/errorHandle";
import { RequestExt } from "../intefaces/session.interface";


const getOrders = (req:RequestExt, res:Response) => {
    try{
        res.send({
            data: "ESTO SOLO LO VEN LAS PERSONAS QUE TIENEN SESSION ACTIVA-JWT",
            user: req.user,//esto viene del session middleware, donde devuelvo req.user por ende despues lo puedo mostrar en el response
        })

    }catch(error){
        handleHttp(res, 'ERROR_GET_BLOG')
    }
}


export{ getOrders };