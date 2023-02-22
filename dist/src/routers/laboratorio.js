"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const laboratorioController_1 = require("../controllers/laboratorioController");
const express_1 = __importDefault(require("express"));
const ROUTER_Lab = (0, express_1.default)();
ROUTER_Lab.post('/agregar', laboratorioController_1.agregarLaboratorio);
ROUTER_Lab.get('/obtener', laboratorioController_1.obtenerAllLaboratorio);
ROUTER_Lab.put('/actualizar/:idLaboratorio"', laboratorioController_1.actualizarLaboratorio);
ROUTER_Lab.delete('/eliminar/:idLaboratorio"', laboratorioController_1.eliminarLaboratorio);
ROUTER_Lab.delete('/eliminaTodo', laboratorioController_1.eliminaTodoWarning);
ROUTER_Lab.get("/obtenerOne/:idLaboratorio", laboratorioController_1.obtener1Laboratorio);
exports.default = ROUTER_Lab;
