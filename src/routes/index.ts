import { Router, Request, Response } from "express";
import { readdirSync } from 'fs';



const PATH_ROUTER= `${__dirname}`; //devuelve la ruta actual(src/routes)
const router = Router();

//funcion que limpia el nombre del archivo: items.ts => items
const clearFileName = ( fileName :string ) =>{
  const file = fileName.split('.').shift()      //split()corta un string en partes y se le pasa por parametro el punto de corte en este caso '.'
  return file                                   //shift() elimina y devuelve el primer elemento de un array, como corte el filename con split, elimina la primera parte del filename(la que esta antes del punto) y la devuelve
}


router.get('/', (req:Request, res:Response)=>{
  res.send({data: 'ACA VA index'}); 
});


//funcion que lee todos los archivos dentro del directorio especificado (src/routes) => vieme de PATH_ROUTER
readdirSync(PATH_ROUTER).filter((__filename) => {     //filtra sobre los nombres de archivo encontrados
  const clearName = clearFileName(__filename);
  if (clearName != 'index'){
    import(`./${clearName}`).then((moduleRouter) => {            //importa el archivo /nombreDevuelvoPorClearName, import es async por ende devuelve una promesa
      console.log(`Se esta cargando la ruta... /${clearName}`);  //con un objeto con toda la data del archivo, y ahi entro a la propiedad router de ese obj
      router.use(`/${clearName}`, moduleRouter.router);
    })
  }
});

export  { router };