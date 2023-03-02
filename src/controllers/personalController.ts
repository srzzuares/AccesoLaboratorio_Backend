import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import { PrismaClient,alumnos } from "@prisma/client";
const prisma = new PrismaClient()

// Obtener todos el personal
const obtenerAllPersonal = async (req: Request, res: Response) => {
    const get1 = await prisma.personal.findMany()
    res.status(200).json({
        menssage: "Todos los registros del personal",
        success: true,
        data: get1
    })
}

// Obtener un personal
const obtener1Personal = async (req: Request, res: Response) => {
    const idPersonal = Number(req.params.idPersonal);
    const personal = await prisma.personal.findUnique({
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
};


// Crear un nuevo personal
const agregarPersonal = async (req: Request, res: Response) => {

    const { Numero_Trabajador, Tipo, Estatus, IdCarrera,IdDatosPersona } = req.body;
    const post1 = await prisma.personal.create({
        data: {
            Numero_Trabajador,
            Tipo,
            Estatus,
            IdCarrera,
            IdDatosPersona
        }
    })
    res.status(200).json({
        menssage: "Creacion completa",
        success: true,
        data: post1
    })
}



// Actualizar un usuario alumno
const actualizarPersonal = async (req: Request, res: Response) => {
    const idPersonal = Number(req.params.idPersonal);
    const {Numero_Trabajador, Tipo, Estatus, IdCarrera,IdDatosPersona } = req.body;
    const actPersonal = await prisma.personal.update({
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
    })

    res.status(200).json({
        menssage: "Actualizacion Completa",
        success: true,
        data: actPersonal
    })

}

// Eliminar un usuario alumno
const eliminarPersonal = async (req: Request, res: Response) => {
    const idPersonal = Number(req.params.idPersonal);
    const delete1 = await prisma.personal.delete({
        where: {
            idPersonal
        },
    })
    res.status(200).json({
        menssage: "Eliminado Completado",
        success: true,
        data: idPersonal
    })
}

// Eliminar todos los alumnos registrados
const eliminaTodoWarning = async (req: Request, res: Response) => {
    const warning = await prisma.alumnos.deleteMany()
    console.log('Se Elimino todos los Datos del personal')
}



export { obtener1Personal, obtenerAllPersonal, agregarPersonal, actualizarPersonal, eliminarPersonal, eliminaTodoWarning};
