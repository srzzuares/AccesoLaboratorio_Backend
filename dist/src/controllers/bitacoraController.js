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
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//Agregar un dato a Bitacora
const agregarBitadora = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /*     const agregarBit = await prisma.bitacora.create({
            data:{
                IdPersonal: 1,
                IdLaboratorio: 1,
                IdAlumno: 2,
                IdRecursoLaboratorio: 3,
                Fecha_Entrada: new Date,
                Fecha_Salida: new Date
            }
        }) */
});
exports.agregarBitadora = agregarBitadora;
// Obetener todos los datos de Bitacora
const obtenerBitacora = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getBit = yield prisma.bitacora.findMany();
    console.log('Estos son los registros de la Bitacora ', getBit);
    express_1.response.json(getBit);
});
exports.obtenerBitacora = obtenerBitacora;
// Onteber un solo elemento de Bitacora
const obtenerBitacoraOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getBitOne = yield prisma.bitacora.findUnique({
        where: {
            idBitacora: 1
        }
    });
    console.log('Obtuvo el dato :', getBitOne);
});
exports.obtenerBitacoraOne = obtenerBitacoraOne;
// Actualizar un elemento de Bitacora
const actualizarBitacora = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const actualizarBit = yield prisma.bitacora.update({
        where: {
            idBitacora: 1
        },
        data: {
            IdPersonal: 2,
            IdLaboratorio: 2,
            IdAlumno: 1,
            IdRecursoLaboratorio: 2,
            Fecha_Entrada: new Date,
            Fecha_Salida: new Date
        }
    });
    console.log('Se Actualizaron Datos de la Bitacora: ', actualizarBit);
});
exports.actualizarBitacora = actualizarBitacora;
// Eliminar un elemento de Bitacora
const eliminarBitacoraOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eliminarBitOne = yield prisma.bitacora.delete({
        where: {
            idBitacora: 1
        }
    });
    console.log('Se elimino un dato de la bitacora: ', eliminarBitOne);
});
exports.eliminarBitacoraOne = eliminarBitacoraOne;
// Eliminar todo el contenido de Bitacora
const eliminarBitacoraTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eliminarTodoBit = yield prisma.bitacora.deleteMany();
    console.log('Se eliminaron todos los datos');
});
exports.eliminarBitacoraTodo = eliminarBitacoraTodo;
