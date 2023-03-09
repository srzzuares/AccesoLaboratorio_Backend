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
        body('Titulo_Profesional').trim()
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha '),
        body('Apellido_P')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha y es para entrada. '),
        body('Apellido_M')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha y es para Salida. '),
        body('Nombre')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isString().withMessage('Es Cadena de Texto.'),
        body('Genero').trim()
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isString().withMessage('Es Cadena de Texto.'),
        body('Fecha_Nacimiento')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
        body('Estatus')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
        body('Foto')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
    ]
}


const validarActualizacionDaPer = () => {
    return [
        
    ]
}


export { validarRegistroDaPer, validarActualizacionDaPer };