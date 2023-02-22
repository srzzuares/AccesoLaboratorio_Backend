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
exports.obtener1Laboratorio = exports.eliminaTodoWarning = exports.eliminarLaboratorio = exports.actualizarLaboratorio = exports.obtenerAllLaboratorio = exports.agregarLaboratorio = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Crear un usuario alumno
const agregarLaboratorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre, Descripcion, Ubicacion, Cantidad, IdPersonal } = req.body;
    const post1 = yield prisma.laboratorio.create({
        data: {
            Nombre,
            Descripcion,
            Ubicacion,
            Cantidad,
            IdPersonal
        }
    });
    res.status(200).json({
        menssage: "Laboratorio Agregado",
        success: true,
        data: post1
    });
});
exports.agregarLaboratorio = agregarLaboratorio;
// Obtener todos los usuarios alumnos
const obtenerAllLaboratorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const get1 = yield prisma.laboratorio.findMany();
    res.status(200).json({
        menssage: "Todos los registros de los laboratorios",
        success: true,
        data: get1
    });
});
exports.obtenerAllLaboratorio = obtenerAllLaboratorio;
// Actualizar un usuario alumno
const actualizarLaboratorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idLaboratorio = Number(req.params.idLaboratorio);
    const { Nombre, Descripcion, Ubicacion, Cantidad, IdPersonal } = req.body;
    const actLaborat = yield prisma.laboratorio.update({
        where: {
            idLaboratorio
        },
        data: {
            Nombre,
            Descripcion,
            Ubicacion,
            Cantidad,
            IdPersonal
        },
    });
    res.status(200).json({
        menssage: "Actualizacion de laboratorio Completa",
        success: true,
        data: actLaborat
    });
});
exports.actualizarLaboratorio = actualizarLaboratorio;
// Eliminar un usuario alumno
const eliminarLaboratorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idLaboratorio = Number(req.params.idLaboratorio);
    const delete1 = yield prisma.laboratorio.delete({
        where: {
            idLaboratorio
        },
    });
    res.status(200).json({
        menssage: "Laboratorio Eliminado Corretamente",
        success: true,
        data: idLaboratorio
    });
});
exports.eliminarLaboratorio = eliminarLaboratorio;
// Eliminar todos los alumnos registrados
const eliminaTodoWarning = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const warning = yield prisma.laboratorio.deleteMany();
    console.log('Se Elimino todos los Datos de Alumnos');
});
exports.eliminaTodoWarning = eliminaTodoWarning;
const obtener1Laboratorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idLaboratorio = Number(req.params.idLaboratorio);
    const laboratorio = yield prisma.laboratorio.findUnique({
        where: {
            idLaboratorio
        },
    });
    if (!laboratorio) {
        res.status(404).json({
            success: false,
            message: "Lab no encontrado",
        });
        return;
    }
    res.status(200).json({
        success: true,
        data: laboratorio,
    });
});
exports.obtener1Laboratorio = obtener1Laboratorio;
