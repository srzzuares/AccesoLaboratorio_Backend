import {body} from 'express-validator'
import { PrismaClient, datos_persona } from '@prisma/client'

/* datos_persona = {
    idDatos_persona: number;
    Titulo_Profesional: string | null;
    Apellido_P: string;
    Apellido_M: string | null;
    Nombre: string;
    Genero: datos_persona_Genero | null;
    Fecha_Nacimiento: Date;
    Estatus: datos_persona_Estatus | null;
    Foto: string | null;
} */

const validarRegistroDaPer = () => {
    return [
        body('Titulo_Profesional')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({max:10}).isString().withMessage('Es Cadena de Texto maximo de 10 caracteres.'),
        body('Apellido_P')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({min:8, max:45}).isString().withMessage('Es Cadena de Texto maximo de 45 caracteres y minimo 8 caracteres.'),
        body('Apellido_M')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({min:8, max:45}).isString().withMessage('Es Cadena de Texto maximo de 45 caracteres y minimo 8 caracteres.'),
        body('Nombre')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({min:8, max:45}).isString().withMessage('Es Cadena de Texto maximo de 45 caracteres y minimo 8 caracteres.'),
        body('Genero')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:1}).isString().isIn(['F','M']).withMessage('Es un caracter F/M'),
        body('Fecha_Nacimiento')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isDate().withMessage('Es de tipo Fecha'),
        body('Estatus')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .toLowerCase().isIn(['activo', 'inactivo']).withMessage('Debe ser de tipo numerico. '),
        /* body('Foto')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isURL().withMessage('Debe ser de tipo liga. '), */
    ]
}


const validarActualizacionDaPer = () => {
    return [
        body('Titulo_Profesional')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({max:10}).isString().withMessage('Es Cadena de Texto maximo de 10 caracteres.'),
        body('Apellido_P')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({min:8, max:45}).isString().withMessage('Es Cadena de Texto maximo de 45 caracteres y minimo 8 caracteres.'),
        body('Apellido_M')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({min:8, max:45}).isString().withMessage('Es Cadena de Texto maximo de 45 caracteres y minimo 8 caracteres.'),
        body('Nombre')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({min:8, max:45}).isString().withMessage('Es Cadena de Texto maximo de 45 caracteres y minimo 8 caracteres.'),
        body('Genero')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:1}).isString().isIn(['F','M']).withMessage('Es un caracter F/M'),
        body('Fecha_Nacimiento')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isDate().withMessage('Es de tipo Fecha'),
        body('Estatus')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .toLowerCase().isIn(['activo', 'inactivo']).withMessage('Debe ser de tipo numerico. '),
        /* body('Foto')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isURL().withMessage('Debe ser de tipo liga. '), */
    ]
}


export { validarRegistroDaPer, validarActualizacionDaPer };