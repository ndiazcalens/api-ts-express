import { Request, Response } from "express";
import { handleHttp } from "../utils/errorHandle";

//cual es la funcion que cumple un controlador? => recibe y responde lo que le llega(datos), no tiene logica

const getBlog = (req:Request, res:Response) =>{
    try{
        res.send({data: 'aca va la data del BLOG'})

    }catch(e){
        handleHttp(res, 'ERROR_GET_BLOG')
    }
};

const getBlogs = (req:Request, res:Response) => {
    try{
        res.send({data: "aca va la data"})

    }catch(e){
        handleHttp(res, 'ERROR_GET_BLOG')
    }
}

const postBlog = ({body}:Request, res:Response) => {
    try{
        res.send(body);
    }catch(e){
        handleHttp(res, 'ERROR_POST_BLOG')
    }
}

const updateBlog = (req:Request, res:Response) => {
    try{

    }catch(e){
        handleHttp(res, 'ERROR_UPDATE_BLOG')
    }
}

const deleteBlog = (req:Request, res:Response) => {
    try{

    }catch(e){
        handleHttp(res, 'ERROR_DELETE_BLOG')
    }
}



export { getBlog, getBlogs, postBlog, updateBlog, deleteBlog  }