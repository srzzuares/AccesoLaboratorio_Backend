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
    const { idDatos_persona, Titulo_Profesional, Apellido_P, Apellido_M, Nombre, Genero, Fecha_Nacimiento, Estatus, Foto } = req.body;
    const post = yield prisma.datos_persona.create({
        data: {
            idDatos_persona,
            Titulo_Profesional,
            Apellido_P,
            Apellido_M,
            Nombre,
            Genero,
            Fecha_Nacimiento,
            Estatus,
            Foto
        }
    });
    res.status(200).json({
        menssage: "Se ha creado",
        success: true,
        data: post
    });
});
exports.crearDaper = crearDaper;
// Obtener Todo Personal
const obtenerDaper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getTodoDaPer = yield prisma.datos_persona.findMany();
    res.status(200).json({
        menssage: "Resultados: ",
        success: true,
        data: getTodoDaPer
    });
});
exports.obtenerDaper = obtenerDaper;
const obtenerOneDaper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idDatos_persona = Number(req.params.idDatos_persona);
    const getOneDaper = yield prisma.datos_persona.findUnique({
        where: {
            idDatos_persona
        }
    });
    if (!getOneDaper) {
        res.status(404).json({
            success: false,
            message: "Data no encontrada",
        });
        return;
    }
    res.status(200).json({
        menssage: "Carrera por ID",
        success: true,
        data: getOneDaper
    });
});
exports.obtenerOneDaper = obtenerOneDaper;
const actualizarDaper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idDatos_persona = Number(req.params.idDatos_persona);
    const { Titulo_Profesional, Apellido_P, Apellido_M, Nombre, Genero, Fecha_Nacimiento, Estatus, Foto } = req.body;
    const putActualizarDaper = yield prisma.datos_persona.update({
        where: {
            idDatos_persona
        }, data: {
            Titulo_Profesional,
            Apellido_P,
            Apellido_M,
            Nombre,
            Genero,
            Fecha_Nacimiento,
            Estatus,
            Foto
        }
    });
    res.status(200).json({
        menssage: "Se ha Actualizado",
        success: true,
        data: putActualizarDaper
    });
});
exports.actualizarDaper = actualizarDaper;
const eliminarDaper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idDatos_persona = Number(req.params.idDatos_persona);
    const deleteDaPer = yield prisma.datos_persona.delete({
        where: {
            idDatos_persona
        }
    });
    res.status(200).json({
        menssage: "Se Elimino",
        success: true
    });
});
exports.eliminarDaper = eliminarDaper;
const eliminarTodoDaper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteManyDaper = yield prisma.datos_persona.deleteMany();
    res.status(200).json({
        menssage: "Se Elimino Todo",
        success: true
    });
});
exports.eliminarTodoDaper = eliminarTodoDaper;
