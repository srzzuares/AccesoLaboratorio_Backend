"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homeController_1 = require("../controllers/homeController");
const express_1 = __importDefault(require("express"));
const EJEMPLO_ROUTER = (0, express_1.default)();
EJEMPLO_ROUTER.post('/conectar', homeController_1.conectarDb);
EJEMPLO_ROUTER.post('/registrar', homeController_1.registrarUsuario);
EJEMPLO_ROUTER.post('/saludo', homeController_1.saludar);
exports.default = EJEMPLO_ROUTER;
