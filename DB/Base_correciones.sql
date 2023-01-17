-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `Datos_Persona`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Datos_Persona` ;

CREATE TABLE IF NOT EXISTS `Datos_Persona` (
  `idDatos_persona` INT NOT NULL COMMENT 'Id generado de manera automatica en la insercion una nueva entrada',
  `Titulo_Profesional` VARCHAR(10) NULL COMMENT 'Titulo de la persona, en caso de poseerlo',
  `Apellido_P` VARCHAR(45) NOT NULL COMMENT 'Apellido partero de la persona (Obligatorio)',
  `Apellido_M` VARCHAR(45) NULL COMMENT 'Apellido materno de la persona (Opcional)',
  `Nombre` VARCHAR(45) NOT NULL COMMENT 'Nombre/s de la persona',
  `Genero` ENUM('F', 'M') NULL COMMENT 'Genero de la persona(Opcional)',
  `Fecha_Nacimiento` DATE NOT NULL,
  `Estatus` ENUM('activo', 'inactivo') NULL DEFAULT 'activo' COMMENT 'Estatus de la persona',
  `Foto` VARCHAR(45) NULL,
  PRIMARY KEY (`idDatos_persona`),
  UNIQUE INDEX `idDatos_persona_UNIQUE` (`idDatos_persona` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = 'Datos generales de todo el personal del planel y del alumnado';


-- -----------------------------------------------------
-- Table `Carrera`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Carrera` ;

CREATE TABLE IF NOT EXISTS `Carrera` (
  `idCarrera` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(150) NULL,
  `Abreviatura` VARCHAR(10) NULL,
  `Nivel` ENUM('tsu', 'ingenieria') NULL,
  `Estatus` ENUM('activo', 'inactivo') NULL,
  PRIMARY KEY (`idCarrera`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Periodo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Periodo` ;

CREATE TABLE IF NOT EXISTS `Periodo` (
  `idPeriodo` INT NOT NULL AUTO_INCREMENT,
  `Fecha_Inicio` DATE NOT NULL,
  `Fecha_Final` DATE NOT NULL,
  `Estatus` ENUM('activo', 'inactivo') NOT NULL,
  PRIMARY KEY (`idPeriodo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Grupos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Grupos` ;

CREATE TABLE IF NOT EXISTS `Grupos` (
  `idGrupos` INT NOT NULL AUTO_INCREMENT COMMENT 'Id generado de manera automatica en la insercion una nueva entrada',
  `Estatus` ENUM('activo', 'inactivo') NOT NULL COMMENT 'Estatus del grupo',
  `Grado` VARCHAR(2) NOT NULL COMMENT 'Grado del grupo',
  `Grupo` VARCHAR(1) NOT NULL,
  `IdCarrera` INT NOT NULL,
  `IdPeriodo` INT NOT NULL,
  PRIMARY KEY (`idGrupos`),
  INDEX `IdCarrera_idx` (`IdCarrera` ASC) VISIBLE,
  INDEX `idPeriodo_idx` (`IdPeriodo` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Alumnos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Alumnos` ;

CREATE TABLE IF NOT EXISTS `Alumnos` (
  `idAlumnos` INT NOT NULL AUTO_INCREMENT COMMENT 'Id generado de manera automatica en la insercion una nueva entrada',
  `Matricula` VARCHAR(10) NOT NULL COMMENT 'Matricula del alumno',
  `Estatus` ENUM('activo', 'inactivo') NULL DEFAULT 'activo' COMMENT 'Estatus de la persona',
  `IdGrupo` INT NULL,
  `IdDatos_Persona` INT NULL,
  PRIMARY KEY (`idAlumnos`),
  INDEX `IdGrupo_idx` (`IdGrupo` ASC) VISIBLE,
  INDEX `IdDatos_Persona_idx` (`IdDatos_Persona` ASC) VISIBLE)
ENGINE = InnoDB
COMMENT = 'Datos generales de los alumnos';


-- -----------------------------------------------------
-- Table `Personal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Personal` ;

CREATE TABLE IF NOT EXISTS `Personal` (
  `idPersonal` INT NOT NULL AUTO_INCREMENT,
  `Numero_Trabajador` VARCHAR(150) NOT NULL,
  `Tipo` ENUM('laboratorista', 'maestro') NOT NULL DEFAULT 'maestro',
  `Estatus` ENUM('activo', 'inactivo') NOT NULL,
  `IdCarrera` INT NOT NULL,
  `IdDatosPersona` INT NOT NULL,
  PRIMARY KEY (`idPersonal`),
  INDEX `IdCarrera_idx` (`IdCarrera` ASC) VISIBLE,
  INDEX `IdDatosPersona_idx` (`IdDatosPersona` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Laboratorio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Laboratorio` ;

CREATE TABLE IF NOT EXISTS `Laboratorio` (
  `idLaboratorio` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NULL,
  `Descripcion` VARCHAR(45) NULL,
  `Ubicacion` VARCHAR(45) NULL,
  `Cantidad` VARCHAR(45) NULL,
  `IdPersonal` INT NULL,
  PRIMARY KEY (`idLaboratorio`),
  INDEX `idPersonal_idx` (`IdPersonal` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Clases`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Clases` ;

CREATE TABLE IF NOT EXISTS `Clases` (
  `idClases` INT NOT NULL AUTO_INCREMENT,
  `Dia` ENUM('lunes', 'martes', 'miercoles', 'viernes', 'sabado') NULL,
  `Hora_Inicio` DATE NULL,
  `Hora_Final` DATE NULL,
  `Actividad` VARCHAR(45) NULL,
  `Materia` VARCHAR(45) NULL,
  `Estatus` ENUM('activo', 'inactivo') NULL,
  `IdPeriodo` INT NOT NULL,
  `IdLaboratorio` INT NOT NULL,
  `IdPersonal` INT NOT NULL,
  `IdGrupo` INT NOT NULL,
  PRIMARY KEY (`idClases`),
  INDEX `idPeriodo_idx` (`IdPeriodo` ASC) VISIBLE,
  INDEX `IdPersonal_idx` (`IdPersonal` ASC) VISIBLE,
  INDEX `IdGrupo_idx` (`IdGrupo` ASC) VISIBLE,
  INDEX `IdLaboratorio_idx` (`IdLaboratorio` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Recursos_Laboratorio`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Recursos_Laboratorio` ;

CREATE TABLE IF NOT EXISTS `Recursos_Laboratorio` (
  `idRecursos_Laboratorio` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `No_Serie` VARCHAR(45) NOT NULL,
  `Descripcion` VARCHAR(45) NOT NULL,
  `Estado` ENUM('activo', 'inactivo') NOT NULL,
  `IdLaboratorio` INT NOT NULL,
  PRIMARY KEY (`idRecursos_Laboratorio`),
  INDEX `IdLaboratorio_idx` (`IdLaboratorio` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Bitacora`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Bitacora` ;

CREATE TABLE IF NOT EXISTS `Bitacora` (
  `idBitacora` INT NOT NULL AUTO_INCREMENT,
  `IdPersonal` INT NOT NULL,
  `IdLaboratorio` INT NOT NULL,
  `IdAlumno` INT NOT NULL,
  `IdRecursoLaboratorio` INT NOT NULL,
  `Fecha_Entrada` DATE NOT NULL,
  `Fecha_Salida` DATE NOT NULL,
  `Bitacoracol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idBitacora`),
  INDEX `idPersonal_idx` (`IdPersonal` ASC) VISIBLE,
  INDEX `idLaboratorio_idx` (`IdLaboratorio` ASC) VISIBLE,
  INDEX `idAlumno_idx` (`IdAlumno` ASC) VISIBLE,
  INDEX `idRecursosLaboratorio_idx` (`IdRecursoLaboratorio` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
