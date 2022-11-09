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
    titulo: "registroEjDesdeServicio"

  }];
  

  crearRegistro(registro : Registro){
    this._registros.push(registro);
    this.saveLocalStorage();
    return
  }

  get registros (): Registro  []{
    return this._registros;
  }

  saveLocalStorage(){
    let stringRegistros: string = JSON.stringify(this._registros);
    localStorage.setItem('registros', stringRegistros)
  }

    //eliminarRegistro(registro : Registro
    //let registroNuevo : Registro[] = this._registros.filter((registroItem)=> registroItem.id !==registro.id)

  eliminarRegistro(){
    this._registros.pop()
    this.saveLocalStorage;
  }

  constructor() { }
}
