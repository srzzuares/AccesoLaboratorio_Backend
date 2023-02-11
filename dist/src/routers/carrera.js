"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carreraController_1 = require("../controllers/carreraController");
const express_1 = __importDefault(require("express"));
const ROUTER = (0, express_1.default)();
ROUTER.post('/crear', carreraController_1.crearCarrera);
ROUTER.get('/obtener', carreraController_1.obtenerCarrera);
ROUTER.get('/obtenerOne', carreraController_1.obtenerOneCarrera);
ROUTER.put('/actualizar', carreraController_1.actualizarCarrera);
ROUTER.delete('/eliminar', carreraController_1.eliminarCarrera);
ROUTER.delete('/eliminarTodo', carreraController_1.eliminarTodoCarrera);
exports.default = ROUTER;
