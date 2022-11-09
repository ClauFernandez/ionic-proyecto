import { Injectable } from '@angular/core';
import { CategoriasEgreso, CategoriasIngreso, Registro} from '../models/models';

@Injectable({
  providedIn: 'root'
})

//TODO: eliminar estos registros
export class RegistroService {

  private _registros : Registro [] = [{
    ingreso: true,
    fecha: new Date(),
    categoria: CategoriasIngreso.Sueldo,
    monto: 100000,
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

    //TODO: eliminar, no tengo id en interfaz
    //eliminarRegistro(registro : Registro
    //let registroNuevo : Registro[] = this._registros.filter((registroItem)=> registroItem.id !==registro.id)

  eliminarRegistro(){
    this._registros.pop()
    this.saveLocalStorage;
  }

  constructor() { }
}
