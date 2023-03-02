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
exports.eliminarTodoCarrera = exports.eliminarCarrera = exports.actualizarCarrera = exports.obtenerOneCarrera = exports.obtenerCarrera = exports.crearCarrera = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//Obtener todas las Carreras
const obtenerCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const get1Carr = yield prisma.carrera.findMany();
    res.status(200).json({
        menssage: "Todas las carreras registradas",
        success: true,
        data: get1Carr
    });
});
exports.obtenerCarrera = obtenerCarrera;
//Obtener por Id la Carrera
const obtenerOneCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idCarrera = Number(req.params.idCarrera);
    const getIdCarr = yield prisma.carrera.findUnique({
        where: {
            idCarrera: idCarrera
        }
    });
    if (!getIdCarr) {
        res.status(404).json({
            success: false,
            message: "Carrera no encontrada",
        });
        return;
    }
    res.status(200).json({
        menssage: "Carrera por ID",
        success: true,
        data: getIdCarr
    });
});
exports.obtenerOneCarrera = obtenerOneCarrera;
//Crear una Carrera
const crearCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, abreviatura, nivel, estatus } = req.body;
    const post = yield prisma.carrera.create({
        data: {
            Nombre: nombre,
            Abreviatura: abreviatura,
            Nivel: nivel,
            Estatus: estatus
        }
    });
    res.status(200).json({
        success: true,
        data: post,
    });
});
exports.crearCarrera = crearCarrera;
//Actualizar datos de una Carrera
const actualizarCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idCarrera = Number(req.params.idCarrera);
    const { nombre, abreviatura, nivel, estatus } = req.body;
    const actualizarCarr = yield prisma.carrera.update({
        where: {
            idCarrera: idCarrera
        },
        data: {
            Nombre: nombre,
            Abreviatura: abreviatura,
            Nivel: nivel,
            Estatus: estatus,
        }
    });
    res.status(200).json({
        menssage: "Actualizacion Completa",
        success: true,
        data: actualizarCarr
    });
});
exports.actualizarCarrera = actualizarCarrera;
//Eliminar una Carrera
const eliminarCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idCarrera = Number(req.params.idCarrera);
    const deleCarr = yield prisma.carrera.delete({
        where: {
            idCarrera: idCarrera
        }
    });
    res.status(200).json({
        menssage: "Eliminado Correctamente"
    });
});
exports.eliminarCarrera = eliminarCarrera;
//Eliminar Registros de la Carrera Full
const eliminarTodoCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleManyCarr = yield prisma.carrera.deleteMany();
    res.status(200).json({
        menssage: "Borrado Completado"
    });
});
exports.eliminarTodoCarrera = eliminarTodoCarrera;
