import { Request , Response} from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


// Crear un usuario alumno
const agregarLaboratorio = async (req: Request, res: Response) => {
    const {  Nombre, Descripcion, Ubicacion, Cantidad,IdPersonal } = req.body;
    const post1 = await prisma.laboratorio.create({
        data: {
          
            Nombre,
            Descripcion,
            Ubicacion,
            Cantidad,
            IdPersonal
        }
    })
    res.status(200).json({
        menssage: "Laboratorio Agregado",
        success: true,
        data: post1
    })
}

// Obtener todos los usuarios alumnos
const obtenerAllLaboratorio = async (req: Request, res: Response) => {
    const get1 = await prisma.laboratorio.findMany()
    res.status(200).json({
        menssage: "Todos los registros de los laboratorios",
        success: true,
        data: get1
    })
}

// Actualizar un usuario alumno
const actualizarLaboratorio = async (req: Request, res: Response) => {
    const idLaboratorio = Number(req.params.idLaboratorio);
    const {  Nombre, Descripcion, Ubicacion, Cantidad,IdPersonal } = req.body;
    const actLaborat = await prisma.laboratorio.update({
        where: {
            idLaboratorio
        },
        data: {
            Nombre,
            Descripcion,
            Ubicacion,
            Cantidad,
            IdPersonal
        },
    })
    
    res.status(200).json({
        menssage:"Actualizacion de laboratorio Completa",
        success: true,
        data: actLaborat
    })

}

// Eliminar un usuario alumno
const eliminarLaboratorio = async (req: Request, res: Response) => {
    const idLaboratorio = Number(req.params.idLaboratorio);
    const delete1 = await prisma.laboratorio.delete({
        where: {
            idLaboratorio
        },
    })
    res.status(200).json({
        menssage: "Laboratorio Eliminado Corretamente",
        success: true,
        data: idLaboratorio
    })
}

// Eliminar todos los alumnos registrados
const eliminaTodoWarning = async (req: Request, res: Response) => {
    const warning = await prisma.laboratorio.deleteMany()
    console.log('Se Elimino todos los Datos de Alumnos')
}


const obtener1Laboratorio = async (req: Request, res: Response) => {
    const idLaboratorio = Number(req.params.idLaboratorio);
    const laboratorio = await prisma.laboratorio.findUnique({
      where: {
        idLaboratorio
      },
    });
    if (!laboratorio) {
      res.status(404).json({
        success: false,
        message: "Lab no encontrado",
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: laboratorio,
    });
  };

export { agregarLaboratorio, obtenerAllLaboratorio, actualizarLaboratorio, eliminarLaboratorio, eliminaTodoWarning, obtener1Laboratorio };