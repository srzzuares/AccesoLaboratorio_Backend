"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_1 = __importDefault(require("../routers/home"));
const alumno_1 = __importDefault(require("../routers/alumno"));
const bitacora_1 = __importDefault(require("../routers/bitacora"));
const carrera_1 = __importDefault(require("../routers/carrera"));
const clases_1 = __importDefault(require("../routers/clases"));
const datos_Persona_1 = __importDefault(require("../routers/datos_Persona"));
const grupos_1 = __importDefault(require("../routers/grupos"));
const laboratorio_1 = __importDefault(require("../routers/laboratorio"));
class Server {
    constructor() {
        this.App = (0, express_1.default)();
        this.App.use(express_1.default.json());
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
        this.App.use('/', home_1.default);
        this.App.use('/alumno', alumno_1.default);
        this.App.use('/bitacora', bitacora_1.default);
        this.App.use('/carreras', carrera_1.default);
        this.App.use('/clases', clases_1.default);
        this.App.use('/datosPersonales', datos_Persona_1.default);
        this.App.use('/grupos', grupos_1.default);
        this.App.use('/laboratorios', laboratorio_1.default);
    }
}
exports.default = Server;
