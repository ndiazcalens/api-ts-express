import { Auth } from "../intefaces/auth.interface";
import { User } from "../intefaces/user.interface";
import UserModel from "../models/userModel";
import { encrypt, verify } from "../utils/bcryptHandle";
import { generateToken } from "../utils/jwtHandle";


//funcion que registra nuevo usuario, validando el tipado de cada dato segun la interface User
const newRegister = async ({ email, password, name, age } : User) => {
    const checkIs = await UserModel.findOne({email});//-> es lo mismo que: {email: User.email}, ademas busca si existe un usuario con ese email
    if (checkIs) return "ALREADY_USER";
    const passwordHashed = await encrypt(password);
    const registerNewUser = await UserModel.create({
        email,
        password: passwordHashed,//si solo pondria passwordHashed va a guardar el campo passwordHashed tal cual, con ese nombre de propiedad en la base de datos.
        name,
        age });//->es lo mismo que {email: User.email, password : User.password}

    return registerNewUser;
};

const newLogin = async ({email, password}:Auth) => {
    const checkIs = await UserModel.findOne({ email });//-> es lo mismo que: {email: User.email}, ademas busca si existe un usuario con ese email
    if (!checkIs) return "CANNOT_FOUND_USER"; //checkIs devuelve el objeto ENTERO

    const passwordHash = checkIs.password//esto es el pass hasheado
    const isCorrect = await verify(password, passwordHash)//verify usa compare()que compara la contraseña en texto plano con su version hasheada

    if (!isCorrect) return "INCORRECT_PASSWORD";

    const token = generateToken(checkIs.email)
    
    const data = {token: token,
        userName: checkIs.name,
        email: checkIs.email
    }
    return data;//retorna el objeto entero
};


export { newRegister, newLogin };