import { Request, response, Response } from "express";
import { handleHttp } from "../utils/errorHandle";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.services";

//cual es la funcion que cumple un controlador? => recibe y responde lo que le llega(datos), no tiene logica

const getItem = async ({ params }:Request, res:Response) =>{//{ params } directamente usa params del req, es como decir “Estoy recibiendo el objeto req de Express, y solo me interesa su propiedad params.”
    try{
        const {id} = params;      //--> equivalente a: const id = params.id, saca la propiedad id de ese objeto params
        const responseItem =  await getCar(id)
        res.send(responseItem)
        const data = response ? response : "NOT_FOUND";
    }catch(error){
        handleHttp(res, 'ERROR_GET_ITEM')
    }
};

const getItems = async  (req:Request, res:Response) => {
    try{
        const responseItem = await getCars()
        res.send(responseItem)

    }catch(error){
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

const postItem = async ({ body }:Request, res:Response) => {
    try{
        const responseItem = await insertCar(body); 
        res.send(responseItem);
    }catch(error){
        handleHttp(res, 'ERROR_POST_ITEM', error)
    }
}

const updateItem = async ({ params, body }:Request, res:Response) => {
    try{
        const {id} = params;
        const responseItem = await updateCar(id, body)
        res.send(responseItem)
    }catch(error){
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}

const deleteItem = async ({ params }:Request, res:Response) => {
    try{
        const {id} = params;
        const responseItem = await deleteCar(id)
    }catch(error){
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}



export { getItem, getItems, postItem, updateItem, deleteItem  }