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
exports.eliminarTodoGrupos = exports.eliminarGrupos = exports.actualizarGrupos = exports.obtenerOneGrupos = exports.obtenerGrupos = exports.crearGrupos = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Grupos Crea un grupo
const crearGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = null
    const postGru = yield prisma.grupos.create({
        data: {
            Estatus: 'activo',
            Grado: '8',
            Grupo: 'A',
            IdCarrera: 1,
            IdPeriodo: 1,
        }
    });
    console.log('Se Creo un Grupo: ', postGru);
});
exports.crearGrupos = crearGrupos;
// Grupos Obtener todo los grupos registrados
const obtenerGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = null
    const getGru = yield prisma.grupos.findMany();
    console.log('Se obtiene los datos de Grupo: ', getGru);
});
exports.obtenerGrupos = obtenerGrupos;
// Grupos 
const obtenerOneGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = null
    const getOneGru = yield prisma.grupos.findUnique({
        where: {
            idGrupos: 1
        }
    });
    console.log('Se Obtiene por id de un Grupo: ', getOneGru);
});
exports.obtenerOneGrupos = obtenerOneGrupos;
// Grupos 
const actualizarGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = null
    const actGru = yield prisma.grupos.update({
        where: {
            idGrupos: 1,
        },
        data: {
            Estatus: 'inactivo',
            Grado: '8',
            Grupo: 'A',
            IdCarrera: 1,
            IdPeriodo: 1,
        }
    });
    console.log('Se Actualizo un dato de Grupo: ', actGru);
});
exports.actualizarGrupos = actualizarGrupos;
// Grupos 
const eliminarGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = null
    const postGru = yield prisma.grupos.delete({
        where: {
            idGrupos: 1
        }
    });
    console.log('Se Elimino un dato de Grupo: ', postGru);
});
exports.eliminarGrupos = eliminarGrupos;
// Grupos 
const eliminarTodoGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //const {} = null
    const postGru = yield prisma.grupos.deleteMany();
    console.log('Se Elimito todo de Grupos: ', postGru);
});
exports.eliminarTodoGrupos = eliminarTodoGrupos;
