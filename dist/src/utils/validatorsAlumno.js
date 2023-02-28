"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarActualizacion = exports.validarRegistro = void 0;
const express_validator_1 = require("express-validator");
const validarRegistro = () => {
    return [
        (0, express_validator_1.body)('Matricula')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo.')
            .isLength({ max: 6 })
            .withMessage('Solo es de 6 Caracteres.'),
        (0, express_validator_1.body)('Estatus')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo.')
            .isLowercase()
            .isIn(['activo', 'inactivo'])
            .withMessage('Solo es Activo e Inactivo.'),
        (0, express_validator_1.body)('IdGrupo')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo')
            .isInt()
            .withMessage('Es de tipo Numerico'),
        (0, express_validator_1.body)('IdDatos_Persona')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Hola?, Esta Vacio este campo')
            .isInt()
            .withMessage('Es de tipo Numerico')
    ];
};
exports.validarRegistro = validarRegistro;
const validarActualizacion = () => { };
exports.validarActualizacion = validarActualizacion;
