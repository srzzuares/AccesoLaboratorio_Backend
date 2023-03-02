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
exports.eliminaTodoWarning = exports.eliminarPeriodo = exports.actualizarPeriodo = exports.obtener1Periodo = exports.obtenerAllPeriodos = exports.agregarPerido = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener todos los periodos
const obtenerAllPeriodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const get1 = yield prisma.periodo.findMany();
    res.status(200).json({
        menssage: "Todos los registros de periodos",
        success: true,
        data: get1
    });
});
exports.obtenerAllPeriodos = obtenerAllPeriodos;
// Obtener un periodo
const obtener1Periodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idPeriodo = Number(req.params.idPeriodo);
    const periodo = yield prisma.periodo.findUnique({
        where: {
            idPeriodo
        }
    });
    if (!periodo) {
        res.status(404).json({
            success: false,
            message: "Periodo no encontrado",
        });
        return;
    }
    res.status(200).json({
        success: true,
        data: periodo,
    });
});
exports.obtener1Periodo = obtener1Periodo;
// Crear un periodo
const agregarPerido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Fecha_Inicio, Fecha_Final, Estatus } = req.body;
    const post1 = yield prisma.periodo.create({
        data: {
            Fecha_Inicio,
            Fecha_Final,
            Estatus
        }
    });
    res.status(200).json({
        menssage: "Creacion completa",
        success: true,
        data: post1
    });
});
exports.agregarPerido = agregarPerido;
// Actualizar un periodo
const actualizarPeriodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idPeriodo = Number(req.params.idPeriodo);
    const { Fecha_Inicio, Fecha_Final, Estatus } = req.body;
    const actperiodo = yield prisma.periodo.update({
        where: {
            idPeriodo
        },
        data: {
            Fecha_Inicio,
            Fecha_Final,
            Estatus
        },
    });
    res.status(200).json({
        menssage: "Actualizacion Completa",
        success: true,
        data: actperiodo
    });
});
exports.actualizarPeriodo = actualizarPeriodo;
// Eliminar un periodo
const eliminarPeriodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idPeriodo = Number(req.params.idPeriodo);
    const delete1 = yield prisma.periodo.delete({
        where: {
            idPeriodo
        },
    });
    res.status(200).json({
        menssage: "Eliminado Completado",
        success: true,
        data: idPeriodo
    });
});
exports.eliminarPeriodo = eliminarPeriodo;
// Eliminar todos los periodos registrados
const eliminaTodoWarning = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const warning = yield prisma.periodo.deleteMany();
    console.log('Se Elimino todos los periodos');
});
exports.eliminaTodoWarning = eliminaTodoWarning;
