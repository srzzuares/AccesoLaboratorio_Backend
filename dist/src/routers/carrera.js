"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carreraController_1 = require("../controllers/carreraController");
const express_1 = __importDefault(require("express"));
const ROUTER = (0, express_1.default)();
ROUTER.post('/', carreraController_1.estadoActDesac);
ROUTER.post('/', carreraController_1.carreraActivo);
ROUTER.post('/', carreraController_1.grupos);
ROUTER.post('/', carreraController_1.asignarEquipo);
exports.default = ROUTER;
