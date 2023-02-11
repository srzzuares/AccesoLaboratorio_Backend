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
var Nivel;
(function (Nivel) {
    Nivel["tsu"] = "tsu";
    Nivel["ingenieria"] = "ingenieria";
})(Nivel || (Nivel = {}));
var Estatus;
(function (Estatus) {
    Estatus["activo"] = "activo";
    Estatus["inactivo"] = "inactivo";
})(Estatus || (Estatus = {}));
//Crear una Carrera
const crearCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre, Abreviatura, Nivel, Estatus } = req.body;
    const post = yield prisma.carrera.create({
        data: {
            Nombre: Nombre,
            Abreviatura: Abreviatura,
            Nivel: Nivel,
            Estatus: Estatus,
        }
    });
    console.log('se ha creado una nueva Carrera: ', post);
});
exports.crearCarrera = crearCarrera;
//Obtener todas las Carreras
const obtenerCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const get1Carr = yield prisma.carrera.findMany();
    console.log('Son Todos los Registros de Carreras', get1Carr);
});
exports.obtenerCarrera = obtenerCarrera;
//Obtener por Id la Carrera
const obtenerOneCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = undefined
    const getIdCarr = yield prisma.carrera.findUnique({
        where: {
            idCarrera: 1
        }
    });
});
exports.obtenerOneCarrera = obtenerOneCarrera;
//Actualizar datos de una Carrera
const actualizarCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = undefined
    const actualizarCarr = yield prisma.carrera.update({
        where: {
            idCarrera: 1
        },
        data: {
            Nombre: 'Crystian',
            Abreviatura: 'Idgs',
            Nivel: 'ingenieria',
            Estatus: 'activo',
        }
    });
    console.log('Se Actualizaron datos de una Carrera ', actualizarCarr);
});
exports.actualizarCarrera = actualizarCarrera;
//Eliminar una Carrera
const eliminarCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = undefined
    const deleCarr = yield prisma.carrera.delete({
        where: {
            idCarrera: 1
        }
    });
    console.log('Se ha eliminado un dato de la Carrera ');
});
exports.eliminarCarrera = eliminarCarrera;
//Eliminar Registros de la Carrera Full
const eliminarTodoCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleManyCarr = yield prisma.carrera.deleteMany();
    console.log('Se ha eliminado todo de Carrera');
});
exports.eliminarTodoCarrera = eliminarTodoCarrera;
