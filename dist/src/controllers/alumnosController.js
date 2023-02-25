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
exports.obtener1Alumno = exports.eliminaTodoWarning = exports.eliminarAlumno = exports.actualizarAlumno = exports.obtenerAllAlumno = exports.agregarAlumno = void 0;
const express_validator_1 = require("express-validator");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Crear un usuario alumno
const agregarAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        return res.json({
            errors: errors.array()
        });
    }
    const { Matricula, Estatus, IdGrupo, IdDatos_Persona } = req.body;
    const post1 = yield prisma.alumnos.create({
        data: {
            Matricula,
            Estatus,
            IdGrupo,
            IdDatos_Persona
        }
    });
    res.status(200).json({
        menssage: "Creacion completa",
        success: true,
        data: post1
    });
});
exports.agregarAlumno = agregarAlumno;
// Obtener todos los usuarios alumnos
const obtenerAllAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const get1 = yield prisma.alumnos.findMany();
    res.status(200).json({
        menssage: "Todos los registros de Alumnos",
        success: true,
        data: get1
    });
});
exports.obtenerAllAlumno = obtenerAllAlumno;
// Actualizar un usuario alumno
const actualizarAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idAlumnos = Number(req.params.idAlumnos);
    const { Matricula, Estatus, IdGrupo, IdDatos_Persona } = req.body;
    const actAlumn = yield prisma.alumnos.update({
        where: {
            idAlumnos
        },
        data: {
            Matricula,
            Estatus,
            IdGrupo,
            IdDatos_Persona
        },
    });
    res.status(200).json({
        menssage: "Actualizacion Completa",
        success: true,
        data: actAlumn
    });
});
exports.actualizarAlumno = actualizarAlumno;
// Eliminar un usuario alumno
const eliminarAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idAlumnos = Number(req.params.idAlumnos);
    const delete1 = yield prisma.alumnos.delete({
        where: {
            idAlumnos
        },
    });
    res.status(200).json({
        menssage: "Eliminado Completado",
        success: true,
        data: idAlumnos
    });
});
exports.eliminarAlumno = eliminarAlumno;
// Eliminar todos los alumnos registrados
const eliminaTodoWarning = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const warning = yield prisma.alumnos.deleteMany();
    console.log('Se Elimino todos los Datos de Alumnos');
});
exports.eliminaTodoWarning = eliminaTodoWarning;
const obtener1Alumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idAlumnos = Number(req.params.idAlumnos);
    const alumno = yield prisma.alumnos.findUnique({
        where: {
            idAlumnos
        }
    });
    if (!alumno) {
        res.status(404).json({
            success: false,
            message: "Alumno no encontrado",
        });
        return;
    }
    res.status(200).json({
        success: true,
        data: alumno,
    });
});
exports.obtener1Alumno = obtener1Alumno;
