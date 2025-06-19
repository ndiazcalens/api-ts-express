import "dotenv/config";
import { connect } from "mongoose";//connect viene de mongoose que es para conectarse a bd de mongodb


async function dbConnect():Promise <void> {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI)
}


export default dbConnect;