import { Express } from "express";
import  {PrismaClient}  from "@prisma/client";
const prisma = new PrismaClient()

// Crear un usuario alumno
const agregarAlumno = async(req:Express.Request, res:Express.Response) => {
const post1 = await prisma.alumnos.create({
    data: {
        Matricula: '200527',
        Estatus: 'activo',
        IdGrupo: 4,
        IdDatos_Persona: 5
    }
}) 
console.log('Alumno Creado ', post1)
}

// Obtener todos los usuarios alumnos
const obtenerAllAlumno = async() => {
    const get1 = await prisma.alumnos.findMany()
    console.log('Son todos los Alumnos Registrados: ', get1)
}

// Actualizar un usuario alumno
const actualizarAlumno = async() => {
    const update = await prisma.alumnos.update({
        where: {
            idAlumnos: 1
          },
          data: {
            Matricula: '200527',
            Estatus: 'activo',
            IdGrupo: 2,
            IdDatos_Persona: 1
          },
    })
    console.log('Se actualizaron datos de: ', update)

}

// Eliminar un usuario alumno
const eliminarAlumno = async() => {
    const delete1 = await prisma.alumnos.delete({
        where:{
            idAlumnos: 1
        },
    })

}

// Eliminar todos los alumnos registrados
const eliminaTodoWarning = async ( ) => {
    const warning = await prisma.alumnos.deleteMany()
    console.log('Se Elimino todos los Datos de Alumnos')
}

// Obtener solo un usuario alumno
const obtener1Alumno = async() => {
    const get2 = await prisma.alumnos.findUnique({
        where: {
            idAlumnos: 2
        }
    }) 
    console.log('Alumno: ', get2)
}




export { agregarAlumno, obtenerAllAlumno, actualizarAlumno ,eliminarAlumno, eliminaTodoWarning, obtener1Alumno};