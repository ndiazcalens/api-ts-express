import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwtHandle";
import { RequestExt } from "../intefaces/session.interface";


//hago que el req sea del tipo RequestExt(lo paso por parametro) por ende despues puedo llamar al id del payload en req.user

//se fija si hay un jwt
const checkSession = (req:RequestExt, res:Response, next:NextFunction)=>{
    try {
        const jwtUser = req.headers.authorization ||'';//recupero el token entero
        const jwt= jwtUser.split(' ').pop();//['Bearer', 'token'] eso hace split(), y con pop()agarro el ultimo elemento del array => token
        const isUser = verifyToken(`${jwt}`); //lo transformo en string porque sino aparece un error de tipado
        console.log(isUser); 
        if(!isUser){
            res.status(401);
            res.send('INVALID_SESSION')
        }else{
            req.user= isUser;//EXPLICITAMENTE LE ASIGNO EL VALOR de isUser a req.user, y con esto lo puedo agarrar en el controller
            console.log({jwtUser});
            next() 
        }
        
    } catch (error) {
        res.status(400)
        res.send('INVALID_JWT')
        console.log({ error })
    }
}


export { checkSession }