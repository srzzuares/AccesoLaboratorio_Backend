import {body} from 'express-validator'


const validarRegistro = () => {
    return [
        body('Matricula')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo.')
            .isLength({max:6})
            .withMessage('Solo es de 6 Caracteres.')
    ]
}


const validarActualizacion = () => {}


export { validarRegistro, validarActualizacion };