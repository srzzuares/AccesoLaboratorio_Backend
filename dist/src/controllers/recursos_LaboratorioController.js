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
exports.eliminaTodoWarning = exports.eliminarRecursosLab = exports.actualizarRecursosLab = exports.agregarRecursosLab = exports.obtener1RecursosLab = exports.obtenerRecursosLab = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener todos los recursos laboratorio
const obtenerRecursosLab = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const get1 = yield prisma.recursos_laboratorio.findMany();
    res.status(200).json({
        menssage: "Todos los registros de los recursos laboratorio",
        success: true,
        data: get1
    });
});
exports.obtenerRecursosLab = obtenerRecursosLab;
// Obtener un recurso laboratorio
const obtener1RecursosLab = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idRecursos_Laboratorio = Number(req.params.idRecursos_Laboratorio);
    const recursos_laboratorio = yield prisma.recursos_laboratorio.findUnique({
        where: {
            idRecursos_Laboratorio
        }
    });
    if (!recursos_laboratorio) {
        res.status(404).json({
            success: false,
            message: "Recurso no encontrado",
        });
        return;
    }
    res.status(200).json({
        success: true,
        data: recursos_laboratorio,
    });
});
exports.obtener1RecursosLab = obtener1RecursosLab;
// Crear un recurso laboratorio
const agregarRecursosLab = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Nombre, No_Serie, Descripcion, Estado, IdLaboratorio } = req.body;
    const post1 = yield prisma.recursos_laboratorio.create({
        data: {
            Nombre,
            No_Serie,
            Descripcion,
            Estado,
            IdLaboratorio
        }
    });
    res.status(200).json({
        menssage: "Creacion completa",
        success: true,
        data: post1
    });
});
exports.agregarRecursosLab = agregarRecursosLab;
// Actualizar un recurso laboratorio
const actualizarRecursosLab = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idRecursos_Laboratorio = Number(req.params.idRecursos_Laboratorio);
    const { Nombre, No_Serie, Descripcion, Estado, IdLaboratorio } = req.body;
    const actRecurso = yield prisma.recursos_laboratorio.update({
        where: {
            idRecursos_Laboratorio
        },
        data: {
            Nombre,
            No_Serie,
            Descripcion,
            Estado,
            IdLaboratorio
        },
    });
    res.status(200).json({
        menssage: "Actualizacion Completa",
        success: true,
        data: actRecurso
    });
});
exports.actualizarRecursosLab = actualizarRecursosLab;
// Eliminar un recurso laboratorio
const eliminarRecursosLab = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idRecursos_Laboratorio = Number(req.params.idRecursos_Laboratorio);
    const delete1 = yield prisma.recursos_laboratorio.delete({
        where: {
            idRecursos_Laboratorio
        },
    });
    res.status(200).json({
        menssage: "Eliminado Completado",
        success: true,
        data: idRecursos_Laboratorio
    });
});
exports.eliminarRecursosLab = eliminarRecursosLab;
// Eliminar todos los alumnos registrados
const eliminaTodoWarning = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const warning = yield prisma.recursos_laboratorio.deleteMany();
    console.log('Se Elimino todos los Datos de Recursos');
});
exports.eliminaTodoWarning = eliminaTodoWarning;
