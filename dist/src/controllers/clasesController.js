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
exports.eliminarTodoClases = exports.eliminarClases = exports.actualizarClases = exports.obtenerOneClases = exports.obtenerClases = exports.crearClases = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtiene todos los registros de Clases
const obtenerClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getTodoCla = yield prisma.clases.findMany();
    res.status(200).json({
        Success: true,
        menssage: "Datos Completos de la Tabla",
        data: getTodoCla
    });
});
exports.obtenerClases = obtenerClases;
// Obtiene un dato por medio de Id
const obtenerOneClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idClases = Number(req.params.idClases);
    const getOneCla = yield prisma.clases.findUnique({
        where: {
            idClases
        }
    });
    res.status(200).json({
        success: true,
        menssage: "Clase encontrada ",
        data: getOneCla
    });
});
exports.obtenerOneClases = obtenerOneClases;
// Crea una clase nueva
const crearClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Dia, Hora_Inicio, Hora_Final, Actividad, Materia, Estatus, IdPeriodo, IdLaboratorio, IdPersonal, IdGrupo } = req.body;
    const post1 = yield prisma.clases.create({
        data: {
            Dia,
            Hora_Inicio,
            Hora_Final,
            Actividad,
            Materia,
            Estatus,
            IdPeriodo,
            IdLaboratorio,
            IdPersonal,
            IdGrupo,
        }
    });
    res.status(200).json({
        success: true,
        menssage: "Creado _",
        data: post1
    });
});
exports.crearClases = crearClases;
// Actualiza un dato de Clases
const actualizarClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idClases = Number(req.params.idClases);
    const { Dia, Hora_Inicio, Hora_Final, Actividad, Materia, Estatus, IdPeriodo, IdLaboratorio, IdPersonal, IdGrupo } = req.body;
    const actualizarCla = yield prisma.clases.update({
        where: {
            idClases
        },
        data: {
            Dia,
            Hora_Inicio,
            Hora_Final,
            Actividad,
            Materia,
            Estatus,
            IdPeriodo,
            IdLaboratorio,
            IdPersonal,
            IdGrupo
        }
    });
    res.status(200).json({
        menssage: "Actualizado",
        success: true,
        data: actualizarCla
    });
});
exports.actualizarClases = actualizarClases;
// Elimina un dato por medio de Id
const eliminarClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idClases = Number(req.params.idClases);
    const deleOneCla = yield prisma.clases.delete({
        where: {
            idClases
        }
    });
    res.status(200).json({
        menssage: "Se ha Eliminado",
        success: true
    });
});
exports.eliminarClases = eliminarClases;
// Elimina todos los datos de clases
const eliminarTodoClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleManyCla = yield prisma.clases.deleteMany();
    res.status(200).json({
        menssage: "Se ha eliminado todo",
        success: true
    });
});
exports.eliminarTodoClases = eliminarTodoClases;
