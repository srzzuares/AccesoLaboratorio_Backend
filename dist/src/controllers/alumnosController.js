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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Crear un usuario alumno
const agregarAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post1 = yield prisma.alumnos.create({
        data: {
            Matricula: '200527',
            Estatus: 'activo',
            IdGrupo: 4,
            IdDatos_Persona: 5
        }
    });
    console.log('Alumno Creado ', post1);
});
exports.agregarAlumno = agregarAlumno;
// Obtener todos los usuarios alumnos
const obtenerAllAlumno = () => __awaiter(void 0, void 0, void 0, function* () {
    const get1 = yield prisma.alumnos.findMany();
    console.log('Son todos los Alumnos Registrados: ', get1);
});
exports.obtenerAllAlumno = obtenerAllAlumno;
// Actualizar un usuario alumno
const actualizarAlumno = () => __awaiter(void 0, void 0, void 0, function* () {
    const update = yield prisma.alumnos.update({
        where: {
            idAlumnos: 1
        },
        data: {
            Matricula: '200527',
            Estatus: 'activo',
            IdGrupo: 2,
            IdDatos_Persona: 1
        },
    });
    console.log('Se actualizaron datos de: ', update);
});
exports.actualizarAlumno = actualizarAlumno;
// Eliminar un usuario alumno
const eliminarAlumno = () => __awaiter(void 0, void 0, void 0, function* () {
    const delete1 = yield prisma.alumnos.delete({
        where: {
            idAlumnos: 1
        },
    });
});
exports.eliminarAlumno = eliminarAlumno;
// Eliminar todos los alumnos registrados
const eliminaTodoWarning = () => __awaiter(void 0, void 0, void 0, function* () {
    const warning = yield prisma.alumnos.deleteMany();
    console.log('Se Elimino todos los Datos de Alumnos');
});
exports.eliminaTodoWarning = eliminaTodoWarning;
// Obtener solo un usuario alumno
const obtener1Alumno = () => __awaiter(void 0, void 0, void 0, function* () {
    const get2 = yield prisma.alumnos.findUnique({
        where: {
            idAlumnos: 2
        }
    });
    console.log('Alumno: ', get2);
});
exports.obtener1Alumno = obtener1Alumno;
