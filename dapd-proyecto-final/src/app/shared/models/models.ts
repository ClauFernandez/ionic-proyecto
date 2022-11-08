export interface Usuario{
    userName:string,
    password:string
}

export enum TipoRegistro{
    Ingreso,
    Egreso
}

export enum CategoriasIngreso{
    Sueldo,
    Inversiones,
    IngresosExtra,
}

export enum CategoriasEgreso{
    ExtraccionEfectivo,
    Regalos,
    Tarjetas,
    Servicios,
    Indumentaria,
    Supermercado,
    Alquiler,
    Educacion,
    Impuestos,
    Salidas,
    Ahorro,
    Extras
}

export interface Registro{
    fecha: Date
    ingreso: boolean,
    titulo: string,
    monto: number,
    categoria: string,
    //TODO falta el adjunto: ver cómo se guarda
}

export interface Balance{
    balance: number,
    ingresos: number,
    egresos: number
}