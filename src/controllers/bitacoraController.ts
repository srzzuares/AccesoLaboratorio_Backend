import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

//Agregar un dato a Bitacora
const agregarBitadora = async (req: Request, res: Response) => {
    const { IdPersonal, IdLaboratorio, IdAlumno, IdRecursoLaboratorio, Fecha_Entrada, Fecha_Salida, Bitacoracol } = req.body;
    const post = await prisma.bitacora.create({
        data: {
            IdPersonal,
            IdLaboratorio,
            IdAlumno,
            IdRecursoLaboratorio,
            Fecha_Entrada,
            Fecha_Salida,
            Bitacoracol
        }
    })
    res.status(200).json({
        menssage: "Creacion completa",
        success: true,
        data: post
    })
}


// Obetener todos los datos de Bitacora
const obtenerBitacora = async (req: Request, res: Response) => {
    const getBit = await prisma.bitacora.findMany()
    console.log('Estos son los registros de la Bitacora ', getBit)
    res.status(200).json({
        menssage: "Todos los registros de Bitacora",
        success: true,
        data: getBit
    })
}


// Obteber un solo elemento de Bitacora
const obtenerBitacoraOne = async (req: Request, res: Response) => {
    const idBitacora = Number(req.params.idBitacora);
    const getBitOne = await prisma.bitacora.findUnique({
        where: {
            idBitacora
        }
    })
    if (!getBitOne) {
        res.status(404).json({
          success: false,
          message: "Bitacora no encontrado",
        });
        return;
      }
      res.status(200).json({
        message: "Bitacora encontrada",
        success: true,
        data: getBitOne,
      });
}


// Actualizar un elemento de Bitacora
const actualizarBitacora = async (req: Request, res: Response) => {
    const idBitacora = Number(req.params.idBitacora);
    const { IdPersonal, IdLaboratorio, IdAlumno, IdRecursoLaboratorio, Fecha_Entrada, Fecha_Salida, Bitacoracol } = req.body;
    const actualizarBit = await prisma.bitacora.update({
        where: {
            idBitacora
        },
        data: {
            IdPersonal,
            IdLaboratorio,
            IdAlumno,
            IdRecursoLaboratorio,
            Fecha_Entrada,
            Fecha_Salida,
            Bitacoracol
        }
        
    })
    res.status(200).json({
        menssage:"Actualizacion Completa",
        success: true,
        data: actualizarBit
    })
}


// Eliminar un elemento de Bitacora
const eliminarBitacoraOne = async (req: Request, res: Response) => {
    const idBitacora = Number(req.params.idBitacora);
    const eliminarBitOne = await prisma.bitacora.delete({
        where: {
            idBitacora
        }
    })
    res.status(200).json({
        menssage:"Elimininado Completado",
        success: true
    })
}


// Eliminar todo el contenido de Bitacora
const eliminarBitacoraTodo = async (req: Request, res: Response) => {
    const eliminarTodoBit = await prisma.bitacora.deleteMany()
    res.status(200).json({
        menssage:"Elimininado Completado de Todo",
        success: true
    })
}





export { agregarBitadora, obtenerBitacora, obtenerBitacoraOne, actualizarBitacora, eliminarBitacoraOne, eliminarBitacoraTodo };

