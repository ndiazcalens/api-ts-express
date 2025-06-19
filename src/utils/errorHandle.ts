import { Response } from "express"


//funcion que devuelve el error en el caso de que se produzca, y la utilizo en el catch error de los controllers de items
//errorRaw muestra el error
const handleHttp = (res:Response , error:string, errorRaw ?: any)  => {
    console.log(errorRaw);
    res.status(500);
    res.send({error});
    //aca adentro puedo crear una funcion para que conecte con otra cosa ej otro servicio de login
}

export { handleHttp };