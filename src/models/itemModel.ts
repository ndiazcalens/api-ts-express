import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../intefaces/car.interface";
//SCHEMA en bases de bases no relacionales es como el diseño o estructura de una tabla en sql --> representacion de las propiedades que se van a guardar en base de datos
//model() es la funcion para crear un Model
//<> cuando un dato esta entre picos es porque es un dato generico, se evita poner any pero sigue sin ser un tipo de dato definido, se define cuando se utiliza la funcion o bloque de codigo
const ItemSchema = new Schema<Car>(
    {//aca defino las propiedades que voy a utilizar
        color: {
            type: String,
            required: true
        },
        gas: {
            type: String,
            enum:['gasoline', 'electric'],
            required: true 
        },
        year: {
            type:Number,
            required: true
        },
        description: {
            type:String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    {//aca son configuraciones para el guardado de los datos
        timestamps: true,//la fecha en la que se creo el dato --> se crea una fecha de creacion y fecha de actualizacion de un dato en una coleccion
        versionKey: false//una especie de id o key del dato por version (no el id en si como propiedad) sino que el un identificador del dato por version ej dato version 1 dato version 2 
    }
);


//aca estoy usando la funcion constructora model(), para crear un nuevo Model(ItemSchema), donde lo nombro 'items' en la bd, y que ese modelo 'items' va a estar alimentado por ItemSchema
const CarModel =  model('items', ItemSchema); 


export default CarModel;