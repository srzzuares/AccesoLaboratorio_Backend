import { Request, Response } from "express";
import { PrismaClient, grupos } from "@prisma/client";
const prisma = new PrismaClient()

// Grupos Crea un grupo
const crearGrupos = async (req: Request, res: Response) => {
    const {Estatus, Grado, Grupo, IdCarrera, IdPeriodo} = req.body
    const postGru = await prisma.grupos.create({
        data: {
            Estatus,
            Grado,
            Grupo,
            IdCarrera,
            IdPeriodo,
        }
    })
    res.status(200).json({
        menssage: " Creado _-",
        success: true,
        data: postGru
    })
}


// Grupos Obtener todo los grupos registrados
const obtenerGrupos = async (req: Request, res: Response) => {
    const getGru = await prisma.grupos.findMany()
    res.status(200).json({
        menssage:"Resultados Encontrados ",
        success: true,
        data: getGru
    })
}


// Grupos 
const obtenerOneGrupos = async (req: Request, res: Response) => {
    const idGrupos = Number(req.params.idGrupos)
    const getOneGru = await prisma.grupos.findUnique({
        where: {
            idGrupos
        }
    })
    res.status(200).json({
        menssage: "Encontrado ",
        success: true,
        data: getOneGru
    })
}


// Grupos 
const actualizarGrupos = async (req: Request, res: Response) => {
    const idGrupos = Number(req.params.idGrupos)
    const {Estatus, Grado, Grupo, IdCarrera, IdPeriodo} = req.body
    const actGru = await prisma.grupos.update({
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
    })
    res.status(200).json({
        menssage: "Actualizado",
        success: true,
        data: actGru
    })
}


// Grupos 
const eliminarGrupos = async (req: Request, res: Response) => {
    const idGrupos = Number(req.params.idGrupos)
    const postGru = await prisma.grupos.delete({
        where: {
            idGrupos
        }
    })
    res.status(200).json({
        menssage: "Se elimino un registro de grupos",
        success: true
    })
}


// Grupos 
const eliminarTodoGrupos = async (req: Request, res: Response) => {
    
    const postGru = await prisma.grupos.deleteMany()
    res.status(200).json({
        menssage: "Se elimino todo registro de grupos"
    })
}




export { crearGrupos, obtenerGrupos, obtenerOneGrupos, actualizarGrupos, eliminarGrupos, eliminarTodoGrupos };
