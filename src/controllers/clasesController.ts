import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

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
  console.log('Se ha creado una nueva Clase ', post1)
}

// Obtiene todos los registros de Clases
const obtenerClases = async (req: Request, res: Response) => {
  const getTodoCla = await prisma.clases.findMany()
  console.log('Son todos los registros de clases', getTodoCla)
}

// Obtiene un dato por medio de Id
const obtenerOneClases = async (req: Request, res: Response) => {
  //const {} = undefined
  const getOneCla = await prisma.clases.findUnique({
    where: {
      idClases: 1
    }
  })
  console.log('Dato Id de Clase ', getOneCla)
}

// Actualiza un dato de Clases
const actualizarClases = async (req: Request, res: Response) => {
  //const {} = undefined
  const actualizarCla = await prisma.clases.update({
    where: {
      idClases: 1
    },
    data: {
      Dia: 'martes',
      Hora_Inicio: 'activo',
      Hora_Final: 'activo',
      Actividad: 'CRUD',
      Materia: 'DWP',
      Estatus: 'activo',
      IdPeriodo: 1,
      IdLaboratorio: 1,
      IdPersonal: 1,
      IdGrupo: 1,
    }
  })
  console.log('Se han actualizadi datos de Clases ', actualizarClases)
}

// Elimina un dato por medio de Id
const eliminarClases = async (req: Request, res: Response) => {
  //const {} = undefined
  const deleOneCla = await prisma.clases.delete({
    where: {
      idClases: 1
    }
  })
  console.log('Se ha eliminado un dato de Clases')
}

// Elimina todos los datos de clases
const eliminarTodoClases = async (req: Request, res: Response) => {
  const deleManyCla = await prisma.clases.deleteMany()
  console.log('Se han eliminado todo los datos de Clases')
}


export { crearClases, obtenerClases, obtenerOneClases, actualizarClases, eliminarClases, eliminarTodoClases };
