import express from "express";
import dotenv from "dotenv";
import connection from "./database/connection.js";
import cors from "cors";
import bodyParser from "body-parser";
import UserRoutes from "./routes/users.js";
import PublicationRoutes from "./routes/publications.js";
import FollowRoutes from "./routes/follows.js";

// configurar el dotenv para usar variables de entorno
dotenv.config();

// mensaje de bienvenida 
console.log("API Node en ejecucion");

// usar conecxion en base de datos
connection();


// crear el servidor en node
const app = express();
const puerto = process.env.PORT || 3900;
// configurar cors para que acepte peticiones del frontend
app.use(cors({
    origin:'*',
    methods: 'GET,HEAD,PUT PACH,POST,DELETE',
    preflightContinue: false,
    optionsSucceessStatus: 204
}));

// decodificar los datos desde los formularios para convertirlos en obj de javascript
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//configurar rutas del aplicativo (modulos)
app.use('/api/user', UserRoutes);
app.use('/api/publication',PublicationRoutes);
app.use('/api/follow',FollowRoutes);


// configurar el servidor de node
app.listen(puerto,()=>{
    console.log("servidor de node",puerto);
});

export default app;