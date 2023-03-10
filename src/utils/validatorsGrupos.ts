import { body } from 'express-validator'
import { PrismaClient, grupos } from '@prisma/client'
/* grupos = {
    idGrupos: number;
    Estatus: grupos_Estatus;
    Grado: string;
    Grupo: string;
    IdCarrera: number;
    IdPeriodo: number;
} */


const validarRegistroGrupos = () => {
    return [
        body('Estatus')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .toLowerCase().isIn(['activo', 'inactivo']).withMessage('Solo es activo e inactivo.'),
        body('Grado')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({ max: 2 }).withMessage('Falta un detalle que corregir en Bd'),
        body('Grupo')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({ max: 1 }).withMessage('Falta un detalle que corregir'),
        body('IdCarrera')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser tipo numerico'),
        body('IdPeriodo')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser tipo numerico')
    ]
}


const validarActualizacionGrupos = () => {
    return [
        body('Estatus')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .toLowerCase().isIn(['activo', 'inactivo']).withMessage('Solo es activo e inactivo.'),
        body('Grado')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:2}).withMessage('Falta un detalle que corregir en Bd'),
        body('Grupo')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isLength({max:1}).withMessage('Falta un detalle que corregir'),
        body('IdCarrera')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser tipo numerico'),
        body('IdPeriodo')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser tipo numerico')
    ]
}


export { validarRegistroGrupos, validarActualizacionGrupos };