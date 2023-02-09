import express, { Application } from "express";
import EJEMPLO_ROUTER from "../routers/home";
import ROUTER_Alumno from "../routers/alumno";
import ROUTER_Bitacora from "../routers/bitacora"

class Server {

    private App: Application;
    private port: string;
    constructor() {
        this.App = express();
        this.port = process.env.PORT || '3434';
        this.middlewares();
        this.routes();
    }


    // Metodos
    runServer() {
        this.App.listen(this.port, () => {
            console.log(`[server]: Servidor ----------- Corriendo en el puerto http://localhost:${this.port}`);
        });
    }


    middlewares() {
        /* Todo:Usar CORS
        habilitar el formato json
        carpeta public
        */
    }


    routes() {
        this.App.use('/', EJEMPLO_ROUTER)
        this.App.use('/alumno', ROUTER_Alumno)
        this.App.use('/bitacora', ROUTER_Bitacora)

    }
}

export default Server;