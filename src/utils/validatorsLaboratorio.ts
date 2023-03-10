import {body} from 'express-validator'
import { PrismaClient, laboratorio } from '@prisma/client'

/* laboratorio = {
    idLaboratorio: number;
    Nombre: string | null;
    Descripcion: string | null;
    Ubicacion: string | null;
    Cantidad: string | null;
    IdPersonal: number | null;
} */


const validarRegistroLaboratorio = () => {
    return [
        body('Nombre')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:45}).isString().withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('Descripcion')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:45}).isString().withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('Ubicacion')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({max:45}).isString().withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('Cantidad')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({max:45}).isString().withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('IdPersonal')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser tipo numerico')
    ]
}


const validarActualizacionLaboratorio = () => {
    return [
        body('Nombre')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:45}).isString().withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('Descripcion')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:45}).isString().withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('Ubicacion')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({max:45}).isString().withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('Cantidad')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({max:45}).isString().withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('IdPersonal')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser tipo numerico')
    ]
}


export { validarRegistroLaboratorio, validarActualizacionLaboratorio };