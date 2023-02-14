import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


//Crear una Carrera
const crearCarrera = async (req: Request, res: Response) => {
  const { nombre, abreviatura, nivel, estatus } = req.body;
  const post = await prisma.carrera.create({
    data: {
      Nombre: nombre,
      Abreviatura: abreviatura,
      Nivel: nivel,
      Estatus: estatus
    }
  })
  res.status(200).json({
    success: true,
    data: post,
  });
}

//Obtener todas las Carreras
const obtenerCarrera = async (req: Request, res: Response) => {
  const get1Carr = await prisma.carrera.findMany()
  res.status(200).json({
    menssage: "Todas las carreras registradas",
    success: true,
    data: get1Carr
  });
}


//Obtener por Id la Carrera
const obtenerOneCarrera = async (req: Request, res: Response) => {
  const idAlumnos = Number(req.params.idAlumnos);
  const getIdCarr = await prisma.carrera.findUnique({
    where: {
      idCarrera: idAlumnos
    }
  })
  if (!getIdCarr) {
    res.status(404).json({
      success: false,
      message: "Carrera no encontrada",
    });
    return;
  }
  res.status(200).json({
    menssage: "Carrera por ID",
    success: true,
    data: getIdCarr
  });
}

//Actualizar datos de una Carrera
const actualizarCarrera = async (req: Request, res: Response) => {
  const idAlumnos = Number(req.params.idAlumnos);
  const { nombre, abreviatura, nivel, estatus } = req.body;
  const actualizarCarr = await prisma.carrera.update({
    where: {
      idCarrera: idAlumnos
    },
    data: {
      Nombre: nombre,
      Abreviatura: abreviatura,
      Nivel: nivel,
      Estatus: estatus,
    }
  })
  res.status(200).json({
    menssage: "Actualizacion Completa",
    success: true,
    data: actualizarCarr
  })
}

//Eliminar una Carrera
const eliminarCarrera = async (req: Request, res: Response) => {
  const idAlumnos = Number(req.params.idAlumnos);
  const deleCarr = await prisma.carrera.delete({
    where: {
      idCarrera: idAlumnos
    }
  })
  res.status(200).json({
    menssage: "Eliminado Correctamente"
  })
}

//Eliminar Registros de la Carrera Full
const eliminarTodoCarrera = async (req: Request, res: Response) => {
  const deleManyCarr = await prisma.carrera.deleteMany()
  res.status(200).json({
    menssage: "Borrado Completado"
  })
}


export { crearCarrera, obtenerCarrera, obtenerOneCarrera, actualizarCarrera, eliminarCarrera, eliminarTodoCarrera };
