"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bitacoraController_1 = require("../controllers/bitacoraController");
const express_1 = __importDefault(require("express"));
const ROUTER = (0, express_1.default)();
ROUTER.get('/obtener', bitacoraController_1.obtenerBitacora);
ROUTER.get('/obtenerOne/:idBitacora', bitacoraController_1.obtenerBitacoraOne);
ROUTER.post('/crear', bitacoraController_1.agregarBitadora);
ROUTER.put('/actualizarBit/:idBitacora', bitacoraController_1.actualizarBitacora);
ROUTER.delete('/eliminarBit/:idBitacora', bitacoraController_1.eliminarBitacoraOne);
ROUTER.delete('/eliminarTodo', bitacoraController_1.eliminarBitacoraTodo);
exports.default = ROUTER;
