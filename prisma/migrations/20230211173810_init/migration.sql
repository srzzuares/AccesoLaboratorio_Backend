-- CreateTable
CREATE TABLE `alumnos` (
    `idAlumnos` INTEGER NOT NULL AUTO_INCREMENT,
    `Matricula` VARCHAR(10) NOT NULL,
    `Estatus` ENUM('activo', 'inactivo') NULL DEFAULT 'activo',
    `IdGrupo` INTEGER NULL,
    `IdDatos_Persona` INTEGER NULL,

    INDEX `IdDatos_Persona_idx`(`IdDatos_Persona`),
    INDEX `IdGrupo_idx`(`IdGrupo`),
    PRIMARY KEY (`idAlumnos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bitacora` (
    `idBitacora` INTEGER NOT NULL AUTO_INCREMENT,
    `IdPersonal` INTEGER NOT NULL,
    `IdLaboratorio` INTEGER NOT NULL,
    `IdAlumno` INTEGER NOT NULL,
    `IdRecursoLaboratorio` INTEGER NOT NULL,
    `Fecha_Entrada` DATE NOT NULL,
    `Fecha_Salida` DATE NOT NULL,
    `Bitacoracol` VARCHAR(45) NOT NULL,

    INDEX `idAlumno_idx`(`IdAlumno`),
    INDEX `idLaboratorio_idx`(`IdLaboratorio`),
    INDEX `idPersonal_idx`(`IdPersonal`),
    INDEX `idRecursosLaboratorio_idx`(`IdRecursoLaboratorio`),
    PRIMARY KEY (`idBitacora`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `carrera` (
    `idCarrera` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(150) NULL,
    `Abreviatura` VARCHAR(10) NULL,
    `Nivel` ENUM('tsu', 'ingenieria') NULL,
    `Estatus` ENUM('activo', 'inactivo') NULL,

    PRIMARY KEY (`idCarrera`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clases` (
    `idClases` INTEGER NOT NULL AUTO_INCREMENT,
    `Dia` ENUM('lunes', 'martes', 'miercoles', 'viernes', 'sabado') NULL,
    `Hora_Inicio` DATE NULL,
    `Hora_Final` DATE NULL,
    `Actividad` VARCHAR(45) NULL,
    `Materia` VARCHAR(45) NULL,
    `Estatus` ENUM('activo', 'inactivo') NULL,
    `IdPeriodo` INTEGER NOT NULL,
    `IdLaboratorio` INTEGER NOT NULL,
    `IdPersonal` INTEGER NOT NULL,
    `IdGrupo` INTEGER NOT NULL,

    INDEX `IdGrupo_idx`(`IdGrupo`),
    INDEX `IdLaboratorio_idx`(`IdLaboratorio`),
    INDEX `IdPersonal_idx`(`IdPersonal`),
    INDEX `idPeriodo_idx`(`IdPeriodo`),
    PRIMARY KEY (`idClases`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datos_persona` (
    `idDatos_persona` INTEGER NOT NULL AUTO_INCREMENT,
    `Titulo_Profesional` VARCHAR(10) NULL,
    `Apellido_P` VARCHAR(45) NOT NULL,
    `Apellido_M` VARCHAR(45) NULL,
    `Nombre` VARCHAR(45) NOT NULL,
    `Genero` ENUM('F', 'M') NULL,
    `Fecha_Nacimiento` DATE NOT NULL,
    `Estatus` ENUM('activo', 'inactivo') NULL DEFAULT 'activo',
    `Foto` VARCHAR(45) NULL,

    PRIMARY KEY (`idDatos_persona`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `grupos` (
    `idGrupos` INTEGER NOT NULL AUTO_INCREMENT,
    `Estatus` ENUM('activo', 'inactivo') NOT NULL,
    `Grado` VARCHAR(2) NOT NULL,
    `Grupo` VARCHAR(1) NOT NULL,
    `IdCarrera` INTEGER NOT NULL,
    `IdPeriodo` INTEGER NOT NULL,

    INDEX `IdCarrera_idx`(`IdCarrera`),
    INDEX `idPeriodo_idx`(`IdPeriodo`),
    PRIMARY KEY (`idGrupos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `laboratorio` (
    `idLaboratorio` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(45) NULL,
    `Descripcion` VARCHAR(45) NULL,
    `Ubicacion` VARCHAR(45) NULL,
    `Cantidad` VARCHAR(45) NULL,
    `IdPersonal` INTEGER NULL,

    INDEX `idPersonal_idx`(`IdPersonal`),
    PRIMARY KEY (`idLaboratorio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `periodo` (
    `idPeriodo` INTEGER NOT NULL AUTO_INCREMENT,
    `Fecha_Inicio` DATE NOT NULL,
    `Fecha_Final` DATE NOT NULL,
    `Estatus` ENUM('activo', 'inactivo') NOT NULL,

    PRIMARY KEY (`idPeriodo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `personal` (
    `idPersonal` INTEGER NOT NULL AUTO_INCREMENT,
    `Numero_Trabajador` VARCHAR(150) NOT NULL,
    `Tipo` ENUM('laboratorista', 'maestro') NOT NULL DEFAULT 'maestro',
    `Estatus` ENUM('activo', 'inactivo') NOT NULL,
    `IdCarrera` INTEGER NOT NULL,
    `IdDatosPersona` INTEGER NOT NULL,

    INDEX `IdCarrera_idx`(`IdCarrera`),
    INDEX `IdDatosPersona_idx`(`IdDatosPersona`),
    PRIMARY KEY (`idPersonal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recursos_laboratorio` (
    `idRecursos_Laboratorio` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(45) NOT NULL,
    `No_Serie` VARCHAR(45) NOT NULL,
    `Descripcion` VARCHAR(45) NOT NULL,
    `Estado` ENUM('activo', 'inactivo') NOT NULL,
    `IdLaboratorio` INTEGER NOT NULL,

    INDEX `IdLaboratorio_idx`(`IdLaboratorio`),
    PRIMARY KEY (`idRecursos_Laboratorio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
