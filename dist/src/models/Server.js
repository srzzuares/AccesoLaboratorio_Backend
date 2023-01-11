"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_1 = __importDefault(require("../routers/home"));
class Server {
    constructor() {
        this.App = (0, express_1.default)();
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
    }
}
exports.default = Server;
