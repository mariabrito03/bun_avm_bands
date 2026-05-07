
import { creareServer } from "./server";

const configServer = creareServer();

console.log(`Servidor corriendo en puerto: ${ configServer.port}`);