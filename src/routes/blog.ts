import { Router, Request, Response } from "express";
import { getBlog, getBlogs, postBlog, updateBlog, deleteBlog } from "../controllers/blogsController";


const router = Router();

/*
https:url/asdasd [GET]
*/
//elimino el prefijo Blogs de la ruta porque se maneja de manera dinamica desde index.ts, index ts apunta a este archivo y completa
//automaticamente(dinamicamente) el prefijo de la ruta con la funcion readdirSync()..
router.get('/', getBlogs);

router.get('/:id', getBlog);

router.post('/', postBlog);

router.put('/:id', updateBlog);

router.delete('/:id', deleteBlog);
//cada funcion viene del controlador que controla que hace la ruta

export { router };