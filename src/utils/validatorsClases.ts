import { body } from 'express-validator'
import { PrismaClient, clases } from '@prisma/client'

/* clases = {
    idClases: number;
    Dia: clases_Dia | null;
    Hora_Inicio: Date | null;
    Hora_Final: Date | null;
    Actividad: string | null;
    Materia: string | null;
    Estatus: clases_Estatus | null;
    IdPeriodo: number;
    IdLaboratorio: number;
    IdPersonal: number;
    IdGrupo: number;
} */

const validarRegistroClases = () => {
    return [
        body('Dia').trim()
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha '),
        body('Hora_Inicio')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha y es para entrada. '),
        body('Hora_Final')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha y es para Salida. '),

        body('Actividad')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isString().withMessage('Es Cadena de Texto.'),
        body('Materia').trim()
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isString().withMessage('Es Cadena de Texto.'),

        body('IdPeriodo')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
        body('IdLaboratorio')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
        body('IdPersonal')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
        body('IdGrupo')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
    ]
}


const validarActualizacionClases = () => {
    return [
        body('Dia').trim()
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha '),
        body('Hora_Inicio')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha y es para entrada. '),
        body('Hora_Final')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha y es para Salida. '),

        body('Actividad')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isString().withMessage('Es Cadena de Texto.'),
        body('Materia').trim()
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isString().withMessage('Es Cadena de Texto.'),

        body('IdPeriodo')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
        body('IdLaboratorio')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
        body('IdPersonal')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
        body('IdGrupo')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
    ]
}


export { validarRegistroClases, validarActualizacionClases };