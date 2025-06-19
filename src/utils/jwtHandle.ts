import { sign, verify } from "jsonwebtoken";


const JWT_SECRET= <string>process.env.JWT_SECRET


const generateToken = (id:string)=>{//payload en los parametros, no es el id literal del obj sino un parametro id(puede ser un name, email o un id)
    const jwt= sign({id}, JWT_SECRET,{
        expiresIn : "1h"                //este token expira en 1 hora
    })
    return jwt;
};

const verifyToken = (jwt:string)=>{
    const isOk= verify(jwt, JWT_SECRET);
    return isOk;
};


export { generateToken, verifyToken };

//el token es como un interruptor que activa el acceso al backend, y el payload sirve para saber quién está usando ese token