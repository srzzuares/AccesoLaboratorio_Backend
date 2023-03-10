import { body } from "express-validator";
import { PrismaClient, periodo } from "@prisma/client";

/* periodo = {
    idPeriodo: number;
    Fecha_Inicio: Date;
    Fecha_Final: Date;
    Estatus: periodo_Estatus;
} */

const validarRegistroPeriodo = () => {
    return [
        body('Fecha_Inicio')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isDate().withMessage('El formato de Fecha es invalido'),
        body('Fecha_Final')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isDate().withMessage('El formato de Fecha es invalido'),
        body('Estatus')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .toLowerCase().isIn(['activo', 'inactivo']).withMessage('Solo es activo e inactivo.'),
    ]
}


const validarActualizacionPeriodo = () => {
    return [
        body('Fecha_Inicio')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isDate().withMessage('El formato de Fecha es invalido'),
        body('Fecha_Final')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isDate().withMessage('El formato de Fecha es invalido'),
        body('Estatus')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo')
            .toLowerCase().isIn(['activo', 'inactivo']).withMessage('Solo es activo e inactivo.'),
    ]
}


export { validarRegistroPeriodo, validarActualizacionPeriodo };