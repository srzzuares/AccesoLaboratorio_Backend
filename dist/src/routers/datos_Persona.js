"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const datos_PersonaController_1 = require("../controllers/datos_PersonaController");
const express_1 = __importDefault(require("express"));
const ROUTER_DaPer = (0, express_1.default)();
ROUTER_DaPer.post('/agregar', datos_PersonaController_1.crearDaper);
ROUTER_DaPer.get('/obtener', datos_PersonaController_1.obtenerDaper);
ROUTER_DaPer.get('/obtenerOne', datos_PersonaController_1.obtenerOneDaper);
ROUTER_DaPer.put('/actualizar', datos_PersonaController_1.actualizarDaper);
ROUTER_DaPer.delete('/eliminar', datos_PersonaController_1.eliminarDaper);
ROUTER_DaPer.delete('/eliminarTodo', datos_PersonaController_1.eliminarTodoDaper);
exports.default = ROUTER_DaPer;
