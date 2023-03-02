"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const personalController_1 = require("../controllers/personalController");
const express_1 = __importDefault(require("express"));
const validatorsAlumno_1 = require("../utils/validatorsAlumno");
const ROUTER_personal = (0, express_1.default)();
ROUTER_personal.get('/obtener', personalController_1.obtenerAllPersonal);
ROUTER_personal.get("/obtenerOne/:idPersonal", personalController_1.obtener1Personal);
ROUTER_personal.post('/agregar', (0, validatorsAlumno_1.validarRegistro)(), personalController_1.agregarPersonal);
ROUTER_personal.put('/actualizar/:idPersonal', personalController_1.actualizarPersonal);
ROUTER_personal.delete('/eliminar/:idPersonal', personalController_1.eliminarPersonal);
ROUTER_personal.delete('/eliminaTodo', personalController_1.eliminaTodoWarning);
exports.default = ROUTER_personal;
