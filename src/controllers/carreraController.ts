import { Express } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

//Crear una Carrera
const crearCarrera = (req:Request, res:Response) => { 
  const {} = undefined
  const post = await prisma.carrera.create({
    data: {
      
    }
  })
  console.log('se ha creado una nueva Carrera: ', post)
}

//Obtener todas las Carreras
const obtenerCarrera = (req:Request, res:Response) => { 
  const get1Carr = await prisma.carrera.findMany()
  console.log('Son Todos los Registros de Carreras', get1Carr)
}


//Obtener por Id la Carrera
const obtenerOneCarrera = (req:Request, res: Request) => { 
  const {} = undefined
  const getIdCarr = await prisma.carrera.findUnique({
    where: {
      
    }
  })
}

//Actualizar datos de una Carrera
const actualizarCarrera = (req: Request,res:Response) => { 
  const {} = undefined
  const actualizarCarr = await prisma.carrera.update({
    where:{
      
    },
    data: {
      
      
    }
  })
  console.log('Se Actualizaron datos de una Carrera ', actualizarCarr)
}

//Eliminar una Carrera
const eliminarCarrera = (req: Request, res:Response) => {
  const {} = undefined
  const deleCarr = await prisma.carrera.delete({
    where: {
      
    }
  })
  console.log('Se ha eliminado un dato de la Carrera ')
}

//Eliminar Registros de la Carrera Full
const eliminarTodoCarrera = (req:Request, res:Response) => {
  const deleManyCarr = await prisma.carrera.deleteMany()
  console.log('Se ha eliminado todo de Carrera')
}


export { crearCarrera, obtenerCarrera, obtenerOneCarrera, actualizarCarrera, eliminarCarrera, eliminarTodoCarrera};
