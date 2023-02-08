import { Express } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Crear un usuario alumno
const agregarAlumno = async(req:Express.Request, res:Express.Response) => {



}

// Obtener todos los usuarios alumnos
const obtenerAllAlumno = async() => {
    const post = null

}

// Actualizar un usuario alumno
const actualizarAlumno = async() => {
    const post = null

}

// Eliminar un usuario alumno
const eliminarAlumno = async() => {
    const post = null

}

// Obtener solo un usuario alumno
const obtener1Alumno = async() => {
    const post = null

}




export { agregarAlumno, obtenerAllAlumno, actualizarAlumno ,eliminarAlumno,obtener1Alumno};