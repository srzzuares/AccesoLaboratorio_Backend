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
exports.eliminaTodoWarning = exports.eliminarPersonal = exports.actualizarPersonal = exports.agregarPersonal = exports.obtenerAllPersonal = exports.obtener1Personal = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Obtener todos el personal
const obtenerAllPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const get1 = yield prisma.personal.findMany();
    res.status(200).json({
        menssage: "Todos los registros del personal",
        success: true,
        data: get1
    });
});
exports.obtenerAllPersonal = obtenerAllPersonal;
// Obtener un personal
const obtener1Personal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idPersonal = Number(req.params.idPersonal);
    const personal = yield prisma.personal.findUnique({
        where: {
            idPersonal
        }
    });
    if (!personal) {
        res.status(404).json({
            success: false,
            message: "Personal no encontrado",
        });
        return;
    }
    res.status(200).json({
        success: true,
        data: personal,
    });
});
exports.obtener1Personal = obtener1Personal;
// Crear un nuevo personal
const agregarPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Numero_Trabajador, Tipo, Estatus, IdCarrera, IdDatosPersona } = req.body;
    const post1 = yield prisma.personal.create({
        data: {
            Numero_Trabajador,
            Tipo,
            Estatus,
            IdCarrera,
            IdDatosPersona
        }
    });
    res.status(200).json({
        menssage: "Creacion completa",
        success: true,
        data: post1
    });
});
exports.agregarPersonal = agregarPersonal;
// Actualizar un usuario alumno
const actualizarPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idPersonal = Number(req.params.idPersonal);
    const { Numero_Trabajador, Tipo, Estatus, IdCarrera, IdDatosPersona } = req.body;
    const actPersonal = yield prisma.personal.update({
        where: {
            idPersonal
        },
        data: {
            Numero_Trabajador,
            Tipo,
            Estatus,
            IdCarrera,
            IdDatosPersona
        },
    });
    res.status(200).json({
        menssage: "Actualizacion Completa",
        success: true,
        data: actPersonal
    });
});
exports.actualizarPersonal = actualizarPersonal;
// Eliminar un usuario alumno
const eliminarPersonal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idPersonal = Number(req.params.idPersonal);
    const delete1 = yield prisma.personal.delete({
        where: {
            idPersonal
        },
    });
    res.status(200).json({
        menssage: "Eliminado Completado",
        success: true,
        data: idPersonal
    });
});
exports.eliminarPersonal = eliminarPersonal;
// Eliminar todos los alumnos registrados
const eliminaTodoWarning = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const warning = yield prisma.alumnos.deleteMany();
    console.log('Se Elimino todos los Datos del personal');
});
exports.eliminaTodoWarning = eliminaTodoWarning;
