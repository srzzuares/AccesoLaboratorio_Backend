import express, { Application } from "express";
import EJEMPLO_ROUTER from "../routers/home";
import ROUTER_Alumno from "../routers/alumno";
import ROUTER_Bitacora from "../routers/bitacora"
import ROUTER_Carrera from "../routers/carrera";
import ROUTER_Clases from '../routers/clases'
import ROUTER_Daper from "../routers/datos_Persona"
import ROUTER_Grupos from "../routers/grupos"
import ROUTER_Lab from "../routers/laboratorio"
import ROUTER_Periodo from "../routers/periodo"
import ROUTER_personal from "../routers/personal";
import ROUTER_recursosLab from "../routers/recursos_Laboratorio";
class Server {

    private App: Application;
    private port: string;
    constructor() {
        this.App = express();
        this.App.use(express.json());
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
        this.App.use('/carrera', ROUTER_Carrera)
        this.App.use('/clase', ROUTER_Clases)
        this.App.use('/datosPersonales', ROUTER_Daper)
        this.App.use('/grupo', ROUTER_Grupos)
        this.App.use('/laboratorio', ROUTER_Lab)
        this.App.use('/periodo', ROUTER_Periodo)
        this.App.use('/personal', ROUTER_personal)
        this.App.use('/recursosLab', ROUTER_recursosLab)
    }
}

export default Server;