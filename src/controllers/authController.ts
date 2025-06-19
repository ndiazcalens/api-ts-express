import { Request, Response } from "express";
import { newRegister, newLogin } from "../services/auth.services"


const registerController = async ({ body }:Request, res:Response) => {
    const responseUser = await newRegister(body)
    res.send(responseUser);
};

const loginController = async ({body}:Request, res:Response) => {
    const { email, password } = body;//agarro email y password de body
    const responseUser = await newLogin({email, password})
    res.send(responseUser);     
};


export { registerController, loginController }