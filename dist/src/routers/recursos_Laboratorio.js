"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const recursos_LaboratorioController_1 = require("../controllers/recursos_LaboratorioController");
const express_1 = __importDefault(require("express"));
const validatorsAlumno_1 = require("../utils/validatorsAlumno");
const ROUTER_recursosLab = (0, express_1.default)();
ROUTER_recursosLab.get('/obtener', recursos_LaboratorioController_1.obtenerRecursosLab);
ROUTER_recursosLab.get("/obtenerOne/:idRecursos_Laboratorio", recursos_LaboratorioController_1.obtener1RecursosLab);
ROUTER_recursosLab.post('/agregar', (0, validatorsAlumno_1.validarRegistro)(), recursos_LaboratorioController_1.agregarRecursosLab);
ROUTER_recursosLab.put('/actualizar/:idRecursos_Laboratorio', recursos_LaboratorioController_1.actualizarRecursosLab);
ROUTER_recursosLab.delete('/eliminar/:idRecursos_Laboratorio', recursos_LaboratorioController_1.eliminarRecursosLab);
ROUTER_recursosLab.delete('/eliminaTodo', recursos_LaboratorioController_1.eliminaTodoWarning);
exports.default = ROUTER_recursosLab;
