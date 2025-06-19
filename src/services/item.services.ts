//en los services va toda la logica de negocio
import ItemModel from "../models/itemModel";
import { Car } from "../intefaces/car.interface";

const insertCar = async (item:Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};


const getCar = async (id: string) => {
    const responseCar = await ItemModel.findOne({ _id:id });//_id hace referencia al id que le pone mongodb a cada dato
    return responseCar
}

const getCars = async () => {
    const responseCar = await ItemModel.find({});
    return responseCar
}


const updateCar = async(id: string, data:Car)=>{        //por parametro le paso id del producto y la data con la que se va a actualizar
    const responseUpdatedCar = await ItemModel.findOneAndUpdate({ _id:id }, data, {new:true});//el tercer parametro es porque la funcion findOneAndUpdate por defecto devuelve
    return responseUpdatedCar;                          //el mismo objeto que buscaste(sin actualizar), al indicarle new:true devuelve el objeto despues de actualizar 
}


const deleteCar = async(id: string)=>{
    const responseCar = await ItemModel.deleteOne({ _id:id });//_id hace referencia al id que le pone mongodb a cada dato
    return responseCar
}

export { insertCar, getCars, getCar, updateCar, deleteCar  };