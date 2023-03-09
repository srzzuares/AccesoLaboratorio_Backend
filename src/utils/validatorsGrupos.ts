import {body} from 'express-validator'
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
        /* body('Nombre').trim()
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .isLength({ max: 6 }).withMessage('Solo es de 6 Caracteres.'),
        body('Abreviatura')
            .trim().not().isEmpty().withMessage('Hola?, Esta Vacio este campo.')
            .toLowerCase().isIn(['activo', 'inactivo']).withMessage('Solo es Activo e Inactivo.'),
        body('Nivel')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo'),
        body('Estatus')
            .not().isEmpty().withMessage('Hola?, Esta Vacio este campo') */
    ]
}


const validarActualizacionGrupos = () => {
    return [
        
    ]
}


export { validarRegistroGrupos, validarActualizacionGrupos };