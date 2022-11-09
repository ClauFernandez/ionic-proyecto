export interface Usuario{
    userName    :string,
    password    :string
}

// export enum TipoRegistro{
//     Ingreso,
//     Egreso
// } //TODO: Ver si es necesario este enum

export enum CategoriasIngreso{
    Sueldo              ='Sueldo',
    Inversiones         ='Inversiones',
    IngresosExtra       ='IngresosExtra',
}

export enum CategoriasEgreso{
    ExtraccionEfectivo  = 'ExtraccionEfectivo',
    Regalos             = 'Regalos',
    Tarjetas            = 'Tarjetas',
    Servicios           = 'Servicios',
    Indumentaria        = 'Indumentaria',
    Supermercado        = 'Supermercado',
    Alquiler            = 'Alquiler',
    Educacion           = 'Educacion',
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
    categoria   : CategoriasEgreso | CategoriasIngreso,
    //TODO falta el adjunto: ver cómo se guarda
}

export interface Balance{
    balance     : number,
    ingresos    : number,
    egresos     : number
}