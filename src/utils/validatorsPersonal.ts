import { body } from "express-validator";
import { PrismaClient, personal } from "@prisma/client";

/* personal = {
    idPersonal: number;
    Numero_Trabajador: string;
    Tipo: personal_Tipo;
    Estatus: personal_Estatus;
    IdCarrera: number;
    IdDatosPersona: number;
} */

const validarRegistroPersonal = () => {
    return [
        body('Numero_Trabajador')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:149}).withMessage('Solo es activo e inactivo.'),
        body('Tipo')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isIn(['maestro', 'laboratorista']).withMessage('Es de tipo LAboratorista o Maestro?'),
        body('Estatus')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isIn(['activo', 'inactivo']).withMessage('Esta activo o inactivo'),
        body('IdCarrera')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser tipo numerico'),
        body('IdDatosPersona')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser tipo numerico')
    ]
}


const validarActualizacionPersonal = () => {
    return [
        body('Numero_Trabajador')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:149}).withMessage('Solo es activo e inactivo.'),
        body('Tipo')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isIn(['maestro', 'laboratorista']).withMessage('Es de tipo LAboratorista o Maestro?'),
        body('Estatus')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isIn(['activo', 'inactivo']).withMessage('Esta activo o inactivo'),
        body('IdCarrera')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser tipo numerico'),
        body('IdDatosPersona')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .isInt().withMessage('Debe ser tipo numerico')
    ]
}


export { validarRegistroPersonal, validarActualizacionPersonal };