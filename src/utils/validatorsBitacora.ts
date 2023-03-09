import { body } from 'express-validator'
import { PrismaClient, bitacora } from '@prisma/client'

/* bitacora = {
    idBitacora: number;
    IdPersonal: number;
    IdLaboratorio: number;
    IdAlumno: number;
    IdRecursoLaboratorio: number;
    Fecha_Entrada: Date;
    Fecha_Salida: Date;
    Bitacoracol: string;
} */

const validarRegistroBitacora = () => {
    return [
        body('IdPersonal')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
        body('IdLaboratorio')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
        body('IdAlumno')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser de tipo numerico'),
        body('IdRecursoLaboratorio')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo'),
        body('Fecha_Entrada')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha y es para entrada. '),
        body('Fecha_Salida')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha y es para Salida. '),
        body('Bitacoracol')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')


    ]
}


const validarActualizacionBitacora = () => {
    return [
        body('IdPersonal')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
        body('IdLaboratorio')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isInt().withMessage('Debe ser de tipo numerico. '),
        body('IdAlumno')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser de tipo numerico'),
        body('IdRecursoLaboratorio')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo'),
        body('Fecha_Entrada')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha y es para entrada. '),
        body('Fecha_Salida')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isDate().withMessage('Debe ser formato fecha y es para entrada. '),
        body('Bitacoracol')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
    ]
}


export { validarRegistroBitacora, validarActualizacionBitacora };