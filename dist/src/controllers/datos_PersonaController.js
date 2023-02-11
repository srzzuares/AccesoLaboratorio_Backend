"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarTodoDaper = exports.eliminarDaper = exports.actualizarDaper = exports.obtenerOneDaper = exports.obtenerDaper = exports.crearDaper = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const crearDaper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = undefined
    const post = yield prisma.datos_persona.create({
        data: {
            idDatos_persona: 1,
            Titulo_Profesional: '',
            Apellido_P: 'Var',
            Apellido_M: 'Alv',
            Nombre: 'Joss',
            Genero: 'F',
            Fecha_Nacimiento: '',
            Estatus: 'activo',
            Foto: '',
        }
    });
    console.log('se ha creado un dato de una persona ');
});
exports.crearDaper = crearDaper;
// 
const obtenerDaper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getTodoDaPer = yield prisma.datos_persona.findMany();
    console.log('Estos son los datos de las personas ', getTodoDaPer);
});
exports.obtenerDaper = obtenerDaper;
const obtenerOneDaper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.obtenerOneDaper = obtenerOneDaper;
const actualizarDaper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.actualizarDaper = actualizarDaper;
const eliminarDaper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.eliminarDaper = eliminarDaper;
const eliminarTodoDaper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.eliminarTodoDaper = eliminarTodoDaper;
