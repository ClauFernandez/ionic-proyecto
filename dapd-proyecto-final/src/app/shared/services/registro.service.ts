import { Injectable } from '@angular/core';
import { Registro } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private _registros : Registro [] = [{
    categoria:"categoria 1",
    fecha:new Date(),
    ingreso: true,
    monto: 500,
    titulo: "registro 1"
  }];

  getRegistro (): Registro  []{
    return this._registros;
  }

  constructor() { }
}
