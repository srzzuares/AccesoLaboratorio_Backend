"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const periodoController_1 = require("../controllers/periodoController");
const express_1 = __importDefault(require("express"));
const validatorsAlumno_1 = require("../utils/validatorsAlumno");
const ROUTER_Periodo = (0, express_1.default)();
ROUTER_Periodo.get('/obtener', periodoController_1.obtenerAllPeriodos);
ROUTER_Periodo.get("/obtenerOne/:idPeriodo", periodoController_1.obtener1Periodo);
ROUTER_Periodo.post('/agregar', (0, validatorsAlumno_1.validarRegistro)(), periodoController_1.agregarPerido);
ROUTER_Periodo.put('/actualizar/:idPeriodo', periodoController_1.actualizarPeriodo);
ROUTER_Periodo.delete('/eliminar/:idPeriodo', periodoController_1.eliminarPeriodo);
ROUTER_Periodo.delete('/eliminaTodo', periodoController_1.eliminaTodoWarning);
exports.default = ROUTER_Periodo;
