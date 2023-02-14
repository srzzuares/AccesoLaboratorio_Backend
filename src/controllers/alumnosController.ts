import { Request , Response} from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


// Crear un usuario alumno
const agregarAlumno = async (req: Request, res: Response) => {
    const { Matricula, Estatus, IdGrupo, IdDatos_Persona } = req.body;
    const post1 = await prisma.alumnos.create({
        data: {
            Matricula,
            Estatus,
            IdGrupo,
            IdDatos_Persona
        }
    })
    res.status(200).json({
        menssage: "Creacion completa",
        success: true,
        data: post1
    })
}

// Obtener todos los usuarios alumnos
const obtenerAllAlumno = async (req: Request, res: Response) => {
    const get1 = await prisma.alumnos.findMany()
    res.status(200).json({
        menssage: "Todos los registros de Alumnos",
        success: true,
        data: get1
    })
}

// Actualizar un usuario alumno
const actualizarAlumno = async (req: Request, res: Response) => {
    const idAlumnos = Number(req.params.idAlumnos);
    const { Matricula, Estatus, IdGrupo, IdDatos_Persona } = req.body;
    const actAlumn = await prisma.alumnos.update({
        where: {
            idAlumnos
        },
        data: {
            Matricula,
            Estatus,
            IdGrupo,
            IdDatos_Persona
        },
    })
    
    res.status(200).json({
        menssage:"Actualizacion Completa",
        success: true,
        data: actAlumn
    })

}

// Eliminar un usuario alumno
const eliminarAlumno = async (req: Request, res: Response) => {
    const idAlumnos = Number(req.params.idAlumnos);
    const delete1 = await prisma.alumnos.delete({
        where: {
            idAlumnos
        },
    })
    res.status(200).json({
        menssage: "Eliminado Completado",
        success: true,
        data: idAlumnos
    })
}

// Eliminar todos los alumnos registrados
const eliminaTodoWarning = async (req: Request, res: Response) => {
    const warning = await prisma.alumnos.deleteMany()
    console.log('Se Elimino todos los Datos de Alumnos')
}


const obtener1Alumno = async (req: Request, res: Response) => {
    const idAlumnos = Number(req.params.idAlumnos);
    const alumno = await prisma.alumnos.findUnique({
      where: {
        idAlumnos
      },
    });
    if (!alumno) {
      res.status(404).json({
        success: false,
        message: "Alumno no encontrado",
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: alumno,
    });
  };

export { agregarAlumno, obtenerAllAlumno, actualizarAlumno, eliminarAlumno, eliminaTodoWarning, obtener1Alumno };