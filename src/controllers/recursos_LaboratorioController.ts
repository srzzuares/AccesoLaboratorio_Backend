
import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import { PrismaClient,alumnos } from "@prisma/client";
const prisma = new PrismaClient()

// Obtener todos los recursos laboratorio
const obtenerRecursosLab = async (req: Request, res: Response) => {
    const get1 = await prisma.recursos_laboratorio.findMany()
    res.status(200).json({
        menssage: "Todos los registros de los recursos laboratorio",
        success: true,
        data: get1
    })
}

// Obtener un recurso laboratorio
const obtener1RecursosLab = async (req: Request, res: Response) => {
    const idRecursos_Laboratorio = Number(req.params.idRecursos_Laboratorio);
    const recursos_laboratorio = await prisma.recursos_laboratorio.findUnique({
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
};


// Crear un recurso laboratorio
const agregarRecursosLab = async (req: Request, res: Response) => {
    
    const { Nombre, No_Serie, Descripcion, Estado, IdLaboratorio } = req.body;
    const post1 = await prisma.recursos_laboratorio.create({
        data: {
            Nombre,
            No_Serie,
            Descripcion,
            Estado,
            IdLaboratorio
        }
    })
    res.status(200).json({
        menssage: "Creacion completa",
        success: true,
        data: post1
    })
}



// Actualizar un recurso laboratorio
const actualizarRecursosLab = async (req: Request, res: Response) => {
    const idRecursos_Laboratorio = Number(req.params.idRecursos_Laboratorio);
    const {Nombre, No_Serie, Descripcion, Estado, IdLaboratorio} = req.body;
    const actRecurso = await prisma.recursos_laboratorio.update({
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
    })

    res.status(200).json({
        menssage: "Actualizacion Completa",
        success: true,
        data: actRecurso
    })

}

// Eliminar un recurso laboratorio
const eliminarRecursosLab = async (req: Request, res: Response) => {
    const idRecursos_Laboratorio = Number(req.params.idRecursos_Laboratorio);
    const delete1 = await prisma.recursos_laboratorio.delete({
        where: {
            idRecursos_Laboratorio
        },
    })
    res.status(200).json({
        menssage: "Eliminado Completado",
        success: true,
        data: idRecursos_Laboratorio
    })
}

// Eliminar todos los alumnos registrados
const eliminaTodoWarning = async (req: Request, res: Response) => {
    const warning = await prisma.recursos_laboratorio.deleteMany()
    console.log('Se Elimino todos los Datos de Recursos')
}



export { obtenerRecursosLab, obtener1RecursosLab, agregarRecursosLab, actualizarRecursosLab, eliminarRecursosLab, eliminaTodoWarning };