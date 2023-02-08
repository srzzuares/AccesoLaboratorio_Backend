"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clasesController_1 = require("../controllers/clasesController");
const express_1 = __importDefault(require("express"));
const ROUTER = (0, express_1.default)();
ROUTER.post('/', clasesController_1.estadoActDesac);
ROUTER.post('/', clasesController_1.clasesActivo);
ROUTER.post('/', clasesController_1.grupos);
ROUTER.post('/', clasesController_1.asignarEquipo);
ROUTER.post('/', clasesController_1.asignarProfesor);
ROUTER.post('/', clasesController_1.laboratorista);
exports.default = ROUTER;
