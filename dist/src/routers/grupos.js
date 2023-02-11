"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gruposController_1 = require("../controllers/gruposController");
const express_1 = __importDefault(require("express"));
const ROUTER_Grupos = (0, express_1.default)();
ROUTER_Grupos.post('/agregar', gruposController_1.crearGrupos);
ROUTER_Grupos.get('/obtener', gruposController_1.obtenerGrupos);
ROUTER_Grupos.get('/obtenerOne', gruposController_1.obtenerOneGrupos);
ROUTER_Grupos.put('/actualizar', gruposController_1.actualizarGrupos);
ROUTER_Grupos.delete('/eliminar', gruposController_1.eliminarGrupos);
ROUTER_Grupos.delete('/eliminarTodo', gruposController_1.eliminarTodoGrupos);
exports.default = ROUTER_Grupos;
