import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

// Obtiene todos los registros de Clases
const obtenerClases = async (req: Request, res: Response) => {
  const getTodoCla = await prisma.clases.findMany()
  res.status(200).json({
    Success: true,
    menssage: "Datos Completos de la Tabla",
    data: getTodoCla
  })
}

// Obtiene un dato por medio de Id
const obtenerOneClases = async (req: Request, res: Response) => {
  const idClases = Number(req.params.idClases)
  const getOneCla = await prisma.clases.findUnique({
    where: {
      idClases
    }
  })
  res.status(200).json({
    success: true,
    menssage: "Clase encontrada ",
    data: getOneCla
  })
}


// Crea una clase nueva
const crearClases = async (req: Request, res: Response) => {
  const { Dia, Hora_Inicio, Hora_Final, Actividad, Materia, Estatus, IdPeriodo, IdLaboratorio, IdPersonal, IdGrupo } = req.body;
  const post1 = await prisma.clases.create({
    data: {
      Dia,
      Hora_Inicio,
      Hora_Final,
      Actividad,
      Materia,
      Estatus,
      IdPeriodo,
      IdLaboratorio,
      IdPersonal,
      IdGrupo,
    }
  })
  res.status(200).json({
    success: true,
    menssage: "Creado _",
    data: post1
  })
}


// Actualiza un dato de Clases
const actualizarClases = async (req: Request, res: Response) => {
  const idClases = Number(req.params.idClases)
  const { Dia, Hora_Inicio, Hora_Final, Actividad, Materia, Estatus, IdPeriodo, IdLaboratorio, IdPersonal, IdGrupo } = req.body;
  const actualizarCla = await prisma.clases.update({
    where: {
      idClases
    },
    data: {
      Dia,
      Hora_Inicio,
      Hora_Final,
      Actividad,
      Materia,
      Estatus,
      IdPeriodo,
      IdLaboratorio,
      IdPersonal,
      IdGrupo
    }
  })
  res.status(200).json({
    menssage: "Actualizado",
    success: true,
    data: actualizarCla
  })
}

// Elimina un dato por medio de Id
const eliminarClases = async (req: Request, res: Response) => {
  const idClases = Number(req.params.idClases)
  const deleOneCla = await prisma.clases.delete({
    where: {
      idClases
    }
  })
  res.status(200).json({
    menssage: "Se ha Eliminado",
    success: true
  })
}

// Elimina todos los datos de clases
const eliminarTodoClases = async (req: Request, res: Response) => {
  const deleManyCla = await prisma.clases.deleteMany()
  res.status(200).json({
    menssage: "Se ha eliminado todo",
    success: true
  })
}


export { crearClases, obtenerClases, obtenerOneClases, actualizarClases, eliminarClases, eliminarTodoClases };
