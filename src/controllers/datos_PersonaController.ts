import { Express } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const crearDaper = (req: Request, res:Response) => { 
  const {} = undefined
  const post = await prisma.datos_persona.create({
    data: {
      
    }
  })
  console.log('se ha creado un dato de una persona ', post)
}

// 
const obtenerDaper = (req: Request, res:Response) => { 
  const getTodoDaPer = await prisma.datos_persona.findMany()
  console.log('Estos son los datos de las personas ', getTodoDaPer)
}


const obtenerOneDaper = (req: Request, res:Response) => { 
  
  
}


const actualizarDaper = (req: Request, res:Response) => { 
  
  
}


const eliminarDaper = (req: Request, res:Response) => {
  
  
}


const eliminarTodoDaper = (req: Request, res:Response) => {
  
  
}


export { crearDaper, obtenerDaper, obtenerOneDaper, actualizarDaper, eliminarDaper, eliminarTodoDaper};
