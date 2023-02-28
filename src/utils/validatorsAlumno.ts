import {body} from 'express-validator'


const validarRegistro = () => {
    return [
        body('Matricula')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:6})
            .withMessage('Solo es de 6 Caracteres.'),
        body('Estatus')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo.')
            .isLowercase()
            .isIn(['activo', 'inactivo'])
            .withMessage('Solo es Activo e Inactivo.'),
        body('IdGrupo')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo')
            .isInt()
            .withMessage('Es de tipo Numerico'),
        body('IdDatos_Persona')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo')
            .isInt()
            .withMessage('Es de tipo Numerico')
    ]
}


const validarActualizacion = () => {
    return [
        body('idAlumnos')
            .isInt,
        body('Matricula')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:6})
            .withMessage('Solo es de 6 Caracteres.'),
        body('Estatus')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo.')
            .isLowercase()
            .isIn(['activo', 'inactivo'])
            .withMessage('Solo es Activo e Inactivo.'),
        body('IdGrupo')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo')
            .isInt()
            .withMessage('Es de tipo Numerico'),
        body('IdDatos_Persona')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo')
            .isInt()
            .withMessage('Es de tipo Numerico')
    ]
}


export { validarRegistro, validarActualizacion };