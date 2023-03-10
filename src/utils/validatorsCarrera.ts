import { body } from 'express-validator'
import { PrismaClient, carrera } from '@prisma/client'
/* carrera = {
    idCarrera: number;
    Nombre: string | null;
    Abreviatura: string | null;
    Nivel: carrera_Nivel | null;
    Estatus: carrera_Estatus | null;
} */


const validarRegistroCarrera = () => {
    return [
        body('Nombre')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:150}).isString().withMessage('Es Cadena de Texto.'),
        body('Abreviatura')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({ min:3, max: 10 }).isString().withMessage('Es Cadena de Texto con un limite de 10 caracteres'),
        body('Nivel')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .toLowerCase().isIn(['ingenieria', 'tsu']).withMessage('Solo es ingenieria o tsu.'),
        body('Estatus')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .toLowerCase().isIn(['activo', 'inactivo']).withMessage('Solo es activo e inactivo.')
    ]
}


const validarActualizacionCarrera = () => {
    return [
        body('Nombre')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:150}).isString().withMessage('Es Cadena de Texto.'),
        body('Abreviatura')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({ min:3, max: 10 }).isString().withMessage('Es Cadena de Texto con un limite de 10 caracteres'),
        body('Nivel')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .toLowerCase().isIn(['ingenieria', 'tsu']).withMessage('Solo es ingenieria o tsu.'),
        body('Estatus')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .toLowerCase().isIn(['activo', 'inactivo']).withMessage('Solo es activo e inactivo.')
    ]
}


export { validarRegistroCarrera, validarActualizacionCarrera };