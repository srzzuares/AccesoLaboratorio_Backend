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
    const { Estatus, Grado, Grupo, IdCarrera, IdPeriodo } = req.body;
    const postGru = yield prisma.grupos.create({
        data: {
            Estatus,
            Grado,
            Grupo,
            IdCarrera,
            IdPeriodo,
        }
    });
    res.status(200).json({
        menssage: " Creado _-",
        success: true,
        data: postGru
    });
});
exports.crearGrupos = crearGrupos;
// Grupos Obtener todo los grupos registrados
const obtenerGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getGru = yield prisma.grupos.findMany();
    res.status(200).json({
        menssage: "Resultados Encontrados ",
        success: true,
        data: getGru
    });
});
exports.obtenerGrupos = obtenerGrupos;
// Grupos 
const obtenerOneGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idGrupos = Number(req.params.idGrupos);
    const getOneGru = yield prisma.grupos.findUnique({
        where: {
            idGrupos
        }
    });
    res.status(200).json({
        menssage: "Encontrado ",
        success: true,
        data: getOneGru
    });
});
exports.obtenerOneGrupos = obtenerOneGrupos;
// Grupos 
const actualizarGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idGrupos = Number(req.params.idGrupos);
    const { Estatus, Grado, Grupo, IdCarrera, IdPeriodo } = req.body;
    const actGru = yield prisma.grupos.update({
        where: {
            idGrupos
        },
        data: {
            Estatus,
            Grado,
            Grupo,
            IdCarrera,
            IdPeriodo,
        }
    });
    res.status(200).json({
        menssage: "Actualizado",
        success: true,
        data: actGru
    });
});
exports.actualizarGrupos = actualizarGrupos;
// Grupos 
const eliminarGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idGrupos = Number(req.params.idGrupos);
    const postGru = yield prisma.grupos.delete({
        where: {
            idGrupos
        }
    });
    res.status(200).json({
        menssage: "Se elimino un registro de grupos",
        success: true
    });
});
exports.eliminarGrupos = eliminarGrupos;
// Grupos 
const eliminarTodoGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postGru = yield prisma.grupos.deleteMany();
    res.status(200).json({
        menssage: "Se elimino todo registro de grupos"
    });
});
exports.eliminarTodoGrupos = eliminarTodoGrupos;
