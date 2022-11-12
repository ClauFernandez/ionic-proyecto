export enum CategoriasIngreso{
    Sueldo              ='Sueldo',
    Inversiones         ='Inversiones',
    IngresosExtra       ='Ingresos extra',
}

export enum CategoriasEgreso{
    ExtraccionEfectivo  = 'Extracción efectivo',
    Regalos             = 'Regalos',
    Tarjetas            = 'Tarjetas',
    Servicios           = 'Servicios',
    Indumentaria        = 'Indumentaria',
    Supermercado        = 'Supermercado',
    Alquiler            = 'Alquiler',
    Educacion           = 'Educación',
    Impuestos           = 'Impuestos',
    Salidas             = 'Salidas',
    Ahorro              = 'Ahorro',
    Extras              = 'Extras',
}

export interface Registro{
    id          : number,
    fecha       : Date,
    ingreso     : boolean,
    titulo      : string,
    monto       : number,
    categoria   : CategoriasEgreso | CategoriasIngreso
}

export interface Balance{
    balance     : number,
    ingresos    : number,
    egresos     : number
}