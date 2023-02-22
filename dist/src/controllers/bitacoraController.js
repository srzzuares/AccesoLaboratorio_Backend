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
exports.eliminarBitacoraTodo = exports.eliminarBitacoraOne = exports.actualizarBitacora = exports.obtenerBitacoraOne = exports.obtenerBitacora = exports.agregarBitadora = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//Agregar un dato a Bitacora
const agregarBitadora = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { IdPersonal, IdLaboratorio, IdAlumno, IdRecursoLaboratorio, Fecha_Entrada, Fecha_Salida, Bitacoracol } = req.body;
    const post = yield prisma.bitacora.create({
        data: {
            IdPersonal,
            IdLaboratorio,
            IdAlumno,
            IdRecursoLaboratorio,
            Fecha_Entrada,
            Fecha_Salida,
            Bitacoracol
        }
    });
    res.status(200).json({
        menssage: "Creacion completa",
        success: true,
        data: post
    });
});
exports.agregarBitadora = agregarBitadora;
// Obetener todos los datos de Bitacora
const obtenerBitacora = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getBit = yield prisma.bitacora.findMany();
    // console.log('Estos son los registros de la Bitacora ', getBit)
    res.status(200).json({
        menssage: "Todos los registros de Bitacora",
        success: true,
        data: getBit
    });
});
exports.obtenerBitacora = obtenerBitacora;
// Obteber un solo elemento de Bitacora
const obtenerBitacoraOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idBitacora = Number(req.params.idBitacora);
    const getBitOne = yield prisma.bitacora.findUnique({
        where: {
            idBitacora
        }
    });
    if (!getBitOne) {
        res.status(404).json({
            success: false,
            message: "Bitacora no encontrado",
        });
        return;
    }
    res.status(200).json({
        message: "Bitacora encontrada",
        success: true,
        data: getBitOne,
    });
});
exports.obtenerBitacoraOne = obtenerBitacoraOne;
// Actualizar un elemento de Bitacora
const actualizarBitacora = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idBitacora = Number(req.params.idBitacora);
    const { IdPersonal, IdLaboratorio, IdAlumno, IdRecursoLaboratorio, Fecha_Entrada, Fecha_Salida, Bitacoracol } = req.body;
    const actualizarBit = yield prisma.bitacora.update({
        where: {
            idBitacora
        },
        data: {
            IdPersonal,
            IdLaboratorio,
            IdAlumno,
            IdRecursoLaboratorio,
            Fecha_Entrada,
            Fecha_Salida,
            Bitacoracol
        }
    });
    res.status(200).json({
        menssage: "Actualizacion Completa",
        success: true,
        data: actualizarBit
    });
});
exports.actualizarBitacora = actualizarBitacora;
// Eliminar un elemento de Bitacora
const eliminarBitacoraOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idBitacora = Number(req.params.idBitacora);
    const eliminarBitOne = yield prisma.bitacora.delete({
        where: {
            idBitacora
        }
    });
    res.status(200).json({
        menssage: "Elimininado Completado",
        success: true
    });
});
exports.eliminarBitacoraOne = eliminarBitacoraOne;
// Eliminar todo el contenido de Bitacora
const eliminarBitacoraTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eliminarTodoBit = yield prisma.bitacora.deleteMany();
    res.status(200).json({
        menssage: "Elimininado Completado de Todo",
        success: true
    });
});
exports.eliminarBitacoraTodo = eliminarBitacoraTodo;
