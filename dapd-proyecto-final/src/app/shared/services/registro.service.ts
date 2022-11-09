import { Injectable } from '@angular/core';
import { Registro } from '../models/models';

@Injectable({
  providedIn: 'root'
})

//TODO: eliminar estos registros
export class RegistroService {

  private _registros : Registro [] = [{
    categoria: "2",
    fecha: new Date(),
    ingreso: true,
    monto: 200,
    titulo: "registroEj"

  }];
  

  crearRegistro(registro : Registro){
    this._registros.push(registro)
  }

  get registros (): Registro  []{
    return this._registros;
  }

  constructor() { }
}
