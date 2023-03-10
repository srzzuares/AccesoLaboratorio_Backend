import { body } from "express-validator";
import { PrismaClient, recursos_laboratorio } from "@prisma/client";

/* recursos_laboratorio = {
    idRecursos_Laboratorio: number;
    Nombre: string;
    No_Serie: string;
    Descripcion: string;
    Estado: recursos_laboratorio_Estado;
    IdLaboratorio: number;
} */

const validarRegistroRecurLabo = () => {
    return [
        body('Nombre')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:45}).isString().withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('No_Serie')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:45}).withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('Descripcion')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({max:45}).withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('Estado')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .toLowerCase().isIn(['activo', 'inactivo']).withMessage('Solo es activo e inactivo.'),
        body('IdLaboratorio')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser tipo numerico')
    ]
}


const validarActualizacionRecurLabo = () => {
    return [
        body('Nombre')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:45}).isString().withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('No_Serie')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:45}).withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('Descripcion')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({max:45}).withMessage('Es una cadena de texto con un tamaño de 45 caracteres.'),
        body('Estado')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .toLowerCase().isIn(['activo', 'inactivo']).withMessage('Solo es activo e inactivo.'),
        body('IdLaboratorio')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser tipo numerico')
    ]
}


export { validarRegistroRecurLabo, validarActualizacionRecurLabo };