import { Express } from "express";
import { PrismaClient, datos_persona } from "@prisma/client";
const prisma = new PrismaClient()

const crearDaper = async (req: Express.Request, res: Express.Response) => {
  //const {} = undefined
  const post = await prisma.datos_persona.create({
    data: {
      idDatos_persona: 1,
      Titulo_Profesional: '',
      Apellido_P: 'Var',
      Apellido_M: 'Alv',
      Nombre: 'Joss',
      Genero: 'F',
      Fecha_Nacimiento: new Date(),
      Estatus: 'activo',
      Foto: 'fotito',
    }
  })
  console.log('se ha creado un dato de una persona ')
}

// 
const obtenerDaper = async (req: Express.Request, res: Express.Response) => {
  const getTodoDaPer = await prisma.datos_persona.findMany()
  console.log('Estos son los datos de las personas ', getTodoDaPer)
}


const obtenerOneDaper = async (req: Express.Request, res: Express.Response) => {


}


const actualizarDaper = async (req: Express.Request, res: Express.Response) => {


}


const eliminarDaper = async (req: Express.Request, res: Express.Response) => {


}


const eliminarTodoDaper = async (req: Express.Request, res: Express.Response) => {


}


export { crearDaper, obtenerDaper, obtenerOneDaper, actualizarDaper, eliminarDaper, eliminarTodoDaper };
