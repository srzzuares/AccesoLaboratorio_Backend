import { Express } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

// Crea una clase nueva
const crearClases = (req: Request,res:Response) => { 
  const {} = undefined
  const post = await prisma.clases.create({
    data: {
      
    }
  })
  console.log('Se ha creado una nueva Clase ', post)
}

// Obtiene todos los registros de Clases
const obtenerClases = (req: Request,res:Response) => { 
  const getTodoCla = await prisma.clases.findMany()
  console.log('Son todos los registros de clases')
}

// Obtiene un dato por medio de Id
const obtenerOneClases = (req: Request,res:Response) => { 
  const {} = undefined
  const getOneCla = await prisma.clases.findUnique({
    where: {
      
    }
  })
  console.log('Dato Id de Clase ', getOneCla)
}

// Actualiza un dato de Clases
const actualizarClases = (req: Request, res:Response) => { 
  const {} = undefined
  const actualizarCla = await prisma.clases.update({
    where: {
      
    },
    data:{
      
    }
  })
  console.log('Se han actualizadi datos de Clases ',actualizarClases)
}

// Elimina un dato por medio de Id
const eliminarClases = (req: Request, res:Response) => {
  const {} = undefined
  const deleOneCla = await prisma.clases.delete({
    where:{
      
    }
  })
  console.log('Se ha eliminado un dato de Clases')
}

// Elimina todos los datos de clases
const eliminarTodoClases = (req: Request,res:Response) => {
  const deleManyCla = await prisma.clases.deleteMany()
  console.log('Se han eliminado todo los datos de Clases')
}


export { crearClases, obtenerClases, obtenerOneClases, actualizarClases, eliminarClases, eliminarTodoClases};
