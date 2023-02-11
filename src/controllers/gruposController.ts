import { Express } from "express";
import { PrismaClient, grupos } from "@prisma/client";
const prisma = new PrismaClient()

// Grupos Crea un grupo
const crearGrupos = async (req: Express.Request, res: Express.Response) => {
    //const {} = null
    const postGru = await prisma.grupos.create({
        data: {
            Estatus: 'activo',
            Grado: '8',
            Grupo: 'A',
            IdCarrera: 1,
            IdPeriodo: 1,
        }
    })
    console.log('Se Creo un Grupo: ', postGru)
}


// Grupos Obtener todo los grupos registrados
const obtenerGrupos = async (req: Express.Request, res: Express.Response) => {
    //const {} = null
    const getGru = await prisma.grupos.findMany()
    console.log('Se obtiene los datos de Grupo: ', getGru)
}


// Grupos 
const obtenerOneGrupos = async (req: Express.Request, res: Express.Response) => {
    //const {} = null
    const getOneGru = await prisma.grupos.findUnique({
        where: {
            idGrupos: 1
        }
    })
    console.log('Se Obtiene por id de un Grupo: ', getOneGru)
}


// Grupos 
const actualizarGrupos = async (req: Express.Request, res: Express.Response) => {
    //const {} = null
    const actGru = await prisma.grupos.update({
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
    })
    console.log('Se Actualizo un dato de Grupo: ', actGru)
}


// Grupos 
const eliminarGrupos = async (req: Express.Request, res: Express.Response) => {
    //const {} = null
    const postGru = await prisma.grupos.delete({
        where: {
            idGrupos: 1
        }
    })
    console.log('Se Elimino un dato de Grupo: ', postGru)
}


// Grupos 
const eliminarTodoGrupos = async (req: Express.Request, res: Express.Response) => {
    //const {} = null
    const postGru = await prisma.grupos.deleteMany()
    console.log('Se Elimito todo de Grupos: ', postGru)
}




export { crearGrupos, obtenerGrupos, obtenerOneGrupos, actualizarGrupos, eliminarGrupos, eliminarTodoGrupos };
