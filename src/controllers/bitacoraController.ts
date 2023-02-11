import { Express, response } from "express";
import { PrismaClient, bitacora } from "@prisma/client"
const prisma = new PrismaClient()

//Agregar un dato a Bitacora
const agregarBitadora = async (req: Express.Request, res: Express.Response) => {
    //const {} = null
    const post = await prisma.bitacora.create({
        data: {
            IdPersonal: 1,
            IdLaboratorio: 1,
            IdAlumno: 1,
            IdRecursoLaboratorio: 1,
            Fecha_Entrada: Date(),
            Fecha_Salida: Date(),
            Bitacoracol: 'Hola Terricola',
        }
    })
}


// Obetener todos los datos de Bitacora
const obtenerBitacora = async (req: Express.Request, res: Express.Response) => {
    const getBit = await prisma.bitacora.findMany()
    console.log('Estos son los registros de la Bitacora ', getBit)
    response.json(getBit)
}


// Onteber un solo elemento de Bitacora
const obtenerBitacoraOne = async (req: Express.Request, res: Express.Response) => {
    const getBitOne = await prisma.bitacora.findUnique({
        where: {
            idBitacora: 1
        }
    })
    console.log('Obtuvo el dato :', getBitOne)
}


// Actualizar un elemento de Bitacora
const actualizarBitacora = async (req: Express.Request, res: Express.Response) => {
    const actualizarBit = await prisma.bitacora.update({
        where: {
            idBitacora: 1
        },
        data: {
            IdPersonal: 2,
            IdLaboratorio: 2,
            IdAlumno: 1,
            IdRecursoLaboratorio: 2,
            Fecha_Entrada: new Date,
            Fecha_Salida: new Date
        }
    })
    console.log('Se Actualizaron Datos de la Bitacora: ', actualizarBit)
}


// Eliminar un elemento de Bitacora
const eliminarBitacoraOne = async (req: Express.Request, res: Express.Response) => {
    const eliminarBitOne = await prisma.bitacora.delete({
        where: {
            idBitacora: 1
        }
    })
    console.log('Se elimino un dato de la bitacora: ', eliminarBitOne)
}


// Eliminar todo el contenido de Bitacora
const eliminarBitacoraTodo = async (req: Express.Request, res: Express.Response) => {
    const eliminarTodoBit = await prisma.bitacora.deleteMany()
    console.log('Se eliminaron todos los datos')
}





export { agregarBitadora, obtenerBitacora, obtenerBitacoraOne, actualizarBitacora, eliminarBitacoraOne, eliminarBitacoraTodo };

