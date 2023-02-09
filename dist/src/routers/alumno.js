"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alumnosController_1 = require("../controllers/alumnosController");
const express_1 = __importDefault(require("express"));
const ROUTER_Alumno = (0, express_1.default)();
ROUTER_Alumno.post('/agregar', alumnosController_1.agregarAlumno);
ROUTER_Alumno.get('/obtener', alumnosController_1.obtenerAllAlumno);
ROUTER_Alumno.put('/actualizar', alumnosController_1.actualizarAlumno);
ROUTER_Alumno.delete('/eliminar', alumnosController_1.eliminarAlumno);
ROUTER_Alumno.delete('/eliminaTodo', alumnosController_1.eliminaTodoWarning);
ROUTER_Alumno.get('/obtenerOne', alumnosController_1.obtener1Alumno);
exports.default = ROUTER_Alumno;
