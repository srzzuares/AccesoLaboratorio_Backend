import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import { PrismaClient,alumnos } from "@prisma/client";
const prisma = new PrismaClient()

// Obtener todos los periodos
const obtenerAllPeriodos = async (req: Request, res: Response) => {
    const get1 = await prisma.periodo.findMany()
    res.status(200).json({
        menssage: "Todos los registros de periodos",
        success: true,
        data: get1
    })
}

// Obtener un periodo
const obtener1Periodo = async (req: Request, res: Response) => {
    const idPeriodo = Number(req.params.idPeriodo);
    const periodo = await prisma.periodo.findUnique({
        where: {
            idPeriodo
        }
    });
    if (!periodo) {
        res.status(404).json({
            success: false,
            message: "Periodo no encontrado",
        });
        return;
    }
    res.status(200).json({
        success: true,
        data: periodo,
    });
};


// Crear un periodo
const agregarPerido = async (req: Request, res: Response) => {

    const { Fecha_Inicio,Fecha_Final, Estatus } = req.body;
    const post1 = await prisma.periodo.create({
        data: {
            Fecha_Inicio,
            Fecha_Final,
            Estatus
        }
    })
    res.status(200).json({
        menssage: "Creacion completa",
        success: true,
        data: post1
    })
}



// Actualizar un periodo
const actualizarPeriodo = async (req: Request, res: Response) => {
    const idPeriodo = Number(req.params.idPeriodo);
    const { Fecha_Inicio,Fecha_Final, Estatus } = req.body;
    const actperiodo = await prisma.periodo.update({
        where: {
            idPeriodo
        },
        data: {
            Fecha_Inicio,
            Fecha_Final,
            Estatus
        },
    })

    res.status(200).json({
        menssage: "Actualizacion Completa",
        success: true,
        data: actperiodo
    })

}

// Eliminar un periodo
const eliminarPeriodo = async (req: Request, res: Response) => {
    const idPeriodo = Number(req.params.idPeriodo);
    const delete1 = await prisma.periodo.delete({
        where: {
            idPeriodo
        },
    })
    res.status(200).json({
        menssage: "Eliminado Completado",
        success: true,
        data: idPeriodo
    })
}

// Eliminar todos los periodos registrados
const eliminaTodoWarning = async (req: Request, res: Response) => {
    const warning = await prisma.periodo.deleteMany()
    console.log('Se Elimino todos los periodos')
}

export {agregarPerido, obtenerAllPeriodos, obtener1Periodo, actualizarPeriodo, eliminarPeriodo, eliminaTodoWarning};
