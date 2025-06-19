import ItemModel from "../models/itemModel";
import { Car } from "../intefaces/car.interface";


const getOrders = async () => {
    const responseCar = await ItemModel.find({});
    return responseCar
}


export { getOrders };