"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clasesController_1 = require("../controllers/clasesController");
const express_1 = __importDefault(require("express"));
const ROUTER_Clases = (0, express_1.default)();
ROUTER_Clases.post('/agregar', clasesController_1.crearClases);
ROUTER_Clases.get('/obtener', clasesController_1.obtenerClases);
ROUTER_Clases.get('/obtenerOne', clasesController_1.obtenerOneClases);
ROUTER_Clases.put('/actualizar', clasesController_1.actualizarClases);
ROUTER_Clases.delete('/eliminar', clasesController_1.eliminarClases);
ROUTER_Clases.delete('/eliminarTodo', clasesController_1.eliminarTodoClases);
exports.default = ROUTER_Clases;
