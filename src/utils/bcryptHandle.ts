import {hash, compare } from "bcryptjs"


const encrypt = async (pass:string)=>{
    const passwordHash = await hash (pass, 8) //pass: la contraseña que el usuario ingresó (en texto plano)
    return passwordHash;                     //8: el salt rounds, la cantidad de veces que se repite el algoritmo de hasheo
};                                           //la contraseña se guarda hasheada(no se puede deshashear, eso seria si estaria encriptada que SI se puede desencriptar)

const verify = async (pass:string, passHash:string )=>{
    const isCorrect= await compare(pass, passHash);//compare compara una password en texto plano con su version hasheada
    return isCorrect;//dato booleano
};

export { encrypt, verify }