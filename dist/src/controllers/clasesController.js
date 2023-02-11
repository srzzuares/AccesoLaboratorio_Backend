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
// Crea una clase nueva
const crearClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = undefined
    const post1 = yield prisma.clases.create({
        data: {
            Dia: 'lunes',
            Hora_Inicio: 'activo',
            Hora_Final: 'activo',
            Actividad: 'CRUD',
            Materia: 'DWP',
            Estatus: 'activo',
            IdPeriodo: 1,
            IdLaboratorio: 1,
            IdPersonal: 1,
            IdGrupo: 1,
        }
    });
    console.log('Se ha creado una nueva Clase ', post1);
});
exports.crearClases = crearClases;
// Obtiene todos los registros de Clases
const obtenerClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getTodoCla = yield prisma.clases.findMany();
    console.log('Son todos los registros de clases', getTodoCla);
});
exports.obtenerClases = obtenerClases;
// Obtiene un dato por medio de Id
const obtenerOneClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = undefined
    const getOneCla = yield prisma.clases.findUnique({
        where: {
            idClases: 1
        }
    });
    console.log('Dato Id de Clase ', getOneCla);
});
exports.obtenerOneClases = obtenerOneClases;
// Actualiza un dato de Clases
const actualizarClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = undefined
    const actualizarCla = yield prisma.clases.update({
        where: {
            idClases: 1
        },
        data: {
            Dia: 'martes',
            Hora_Inicio: 'activo',
            Hora_Final: 'activo',
            Actividad: 'CRUD',
            Materia: 'DWP',
            Estatus: 'activo',
            IdPeriodo: 1,
            IdLaboratorio: 1,
            IdPersonal: 1,
            IdGrupo: 1,
        }
    });
    console.log('Se han actualizadi datos de Clases ', actualizarClases);
});
exports.actualizarClases = actualizarClases;
// Elimina un dato por medio de Id
const eliminarClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = undefined
    const deleOneCla = yield prisma.clases.delete({
        where: {
            idClases: 1
        }
    });
    console.log('Se ha eliminado un dato de Clases');
});
exports.eliminarClases = eliminarClases;
// Elimina todos los datos de clases
const eliminarTodoClases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleManyCla = yield prisma.clases.deleteMany();
    console.log('Se han eliminado todo los datos de Clases');
});
exports.eliminarTodoClases = eliminarTodoClases;
