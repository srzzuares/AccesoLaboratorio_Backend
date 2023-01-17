"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alumnosController_1 = require("../controllers/alumnosController");
const express_1 = __importDefault(require("express"));
const ROUTER = (0, express_1.default)();
ROUTER.post('/', alumnosController_1.agregarAlumno);
ROUTER.post('/', alumnosController_1.eliminarAlumno);
ROUTER.post('/', alumnosController_1.actualizarAlumno);
ROUTER.post('/', alumnosController_1.registrarAlumno);
ROUTER.post('/', alumnosController_1.Alumno);
ROUTER.post('/', alumnosController_1.grupoAlumno);
exports.default = ROUTER;
