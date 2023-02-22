import { Request, Response } from "express";
import { PrismaClient, datos_persona } from "@prisma/client";
const prisma = new PrismaClient()

const crearDaper = async (req: Request, res: Response) => {
  const { idDatos_persona, Titulo_Profesional, Apellido_P, Apellido_M, Nombre,
    Genero, Fecha_Nacimiento, Estatus, Foto } = req.body;
  const post = await prisma.datos_persona.create({
    data: {
      idDatos_persona,
      Titulo_Profesional,
      Apellido_P,
      Apellido_M,
      Nombre,
      Genero,
      Fecha_Nacimiento,
      Estatus,
      Foto
    }
  })
  res.status(200).json({
    menssage: "Se ha creado",
    success: true,
    data: post
  })
}

// Obtener Todo Personal
const obtenerDaper = async (req: Request, res: Response) => {
  const getTodoDaPer = await prisma.datos_persona.findMany()
  res.status(200).json({
    menssage: "Resultados: ",
    success: true,
    data: getTodoDaPer
  })
}


const obtenerOneDaper = async (req: Request, res: Response) => {
  const idDatos_persona = Number(req.params.idDatos_persona);
  const getOneDaper = await prisma.datos_persona.findUnique({
    where: {
      idDatos_persona
    }
  })
  if (!getOneDaper) {
    res.status(404).json({
      success: false,
      message: "Data no encontrada",
    });
    return;
  }
  res.status(200).json({
    menssage: "Carrera por ID",
    success: true,
    data: getOneDaper
  });
}


const actualizarDaper = async (req: Request, res: Response) => {
  const idDatos_persona = Number(req.params.idDatos_persona);
  const { Titulo_Profesional, Apellido_P, Apellido_M, Nombre,
    Genero, Fecha_Nacimiento, Estatus, Foto } = req.body;
  const putActualizarDaper = await prisma.datos_persona.update({
    where: {
      idDatos_persona
    }, data: {
      Titulo_Profesional,
      Apellido_P,
      Apellido_M,
      Nombre,
      Genero,
      Fecha_Nacimiento,
      Estatus,
      Foto
    }
  })

  res.status(200).json({
    menssage: "Se ha Actualizado",
    success: true,
    data: putActualizarDaper
  })
}


const eliminarDaper = async (req: Request, res: Response) => {
  const idDatos_persona = Number(req.params.idDatos_persona)
  const deleteDaPer = await prisma.datos_persona.delete({
    where: {
      idDatos_persona
    }
  })
  res.status(200).json({
    menssage: "Se Elimino",
    success: true
  })
}


const eliminarTodoDaper = async (req: Request, res: Response) => {
  const deleteManyDaper = await prisma.datos_persona.deleteMany()
  res.status(200).json({
    menssage: "Se Elimino Todo",
    success: true
  })
}


export { crearDaper, obtenerDaper, obtenerOneDaper, actualizarDaper, eliminarDaper, eliminarTodoDaper };
