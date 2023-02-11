import { Express, Request, Response } from "express";
import { PrismaClient, carrera } from "@prisma/client";
const prisma = new PrismaClient()

enum Nivel {
  tsu = "tsu",
  ingenieria = "ingenieria"
}
enum Estatus {
  activo = "activo",
  inactivo = "inactivo"
}
// Falta Seguir resolviendo el Request
interface typeCarrera {
  idCarrera: number;
  Nombre: string;
  Abreviatura: string;
  Nivel: Nivel;
  Estatus: Estatus;
  /* idCarrera: number;
  Nombre: string | 'Anonimo';
  Abreviatura: string | 'IDGs';
  Nivel: Array<string> | 'tsu';
  Estatus: Array<string> | 'activo'; */
}

export interface AuthRequest extends Request {
  carrera: typeCarrera;
}

//Crear una Carrera
const crearCarrera = async (req: AuthRequest, res: Express.Response) => {
  const { Nombre, Abreviatura, Nivel, Estatus } = req.body;
  const post = await prisma.carrera.create({
    data: {
      Nombre: Nombre,
      Abreviatura: Abreviatura,
      Nivel: Nivel,
      Estatus: Estatus,
    }
  })
  console.log('se ha creado una nueva Carrera: ', post)
}

//Obtener todas las Carreras
const obtenerCarrera = async (req: Express.Request, res: Express.Response) => {
  const get1Carr = await prisma.carrera.findMany()
  console.log('Son Todos los Registros de Carreras', get1Carr)
}


//Obtener por Id la Carrera
const obtenerOneCarrera = async (req: Express.Request, res: Express.Request) => {
  //const {} = undefined
  const getIdCarr = await prisma.carrera.findUnique({
    where: {
      idCarrera: 1
    }
  })
}

//Actualizar datos de una Carrera
const actualizarCarrera = async (req: Express.Request, res: Express.Response) => {
  //const {} = undefined
  const actualizarCarr = await prisma.carrera.update({
    where: {
      idCarrera: 1
    },
    data: {
      Nombre: 'Crystian',
      Abreviatura: 'Idgs',
      Nivel: 'ingenieria',
      Estatus: 'activo',
    }
  })
  console.log('Se Actualizaron datos de una Carrera ', actualizarCarr)
}

//Eliminar una Carrera
const eliminarCarrera = async (req: Express.Request, res: Express.Response) => {
  //const {} = undefined
  const deleCarr = await prisma.carrera.delete({
    where: {
      idCarrera: 1
    }
  })
  console.log('Se ha eliminado un dato de la Carrera ')
}

//Eliminar Registros de la Carrera Full
const eliminarTodoCarrera = async (req: Express.Request, res: Express.Response) => {
  const deleManyCarr = await prisma.carrera.deleteMany()
  console.log('Se ha eliminado todo de Carrera')
}


export { crearCarrera, obtenerCarrera, obtenerOneCarrera, actualizarCarrera, eliminarCarrera, eliminarTodoCarrera };
