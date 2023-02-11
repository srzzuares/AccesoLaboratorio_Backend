import { Express } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const crearGrupos = async (req: Express.Request, res: Express.Response) => {  }
const obtenerGrupos = async (req: Express.Request, res: Express.Response) => {  }
const obtenerOneGrupos = async (req: Express.Request, res: Express.Response) => {  }
const actualizarGrupos = async (req: Express.Request, res: Express.Response) => {  }
const eliminarGrupos = async (req: Express.Request, res: Express.Response) => {}
const eliminarTodoGrupos = async (req: Express.Request, res: Express.Response) => {}


export { crearGrupos, obtenerGrupos, obtenerOneGrupos, actualizarGrupos, eliminarGrupos, eliminarTodoGrupos};
