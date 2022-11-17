import { Injectable } from '@angular/core';
import { CategoriasEgreso, CategoriasIngreso, Registro } from '../models/models';

@Injectable({
  providedIn: 'root'
})

export class RegistroService {

  private _registros: Registro[] = [];

  constructor() {
    this.loadStorage();
  }


  crearRegistro(registro: Registro) {
    this._registros.push(registro);
    this.ordenarRegistrosPorFecha();
    this.saveLocalStorage();
  }

  get registros(): Registro[] {
    return this._registros;
  }

  saveLocalStorage() {
    let stringRegistros: string = JSON.stringify(this._registros);
    localStorage.setItem('registros', stringRegistros);
  }

  loadStorage() {
    const registroStorage = localStorage.getItem('registros');
    if (registroStorage == null) {
      return this._registros = []
    }
    let registros: Registro[] = JSON.parse(registroStorage);
    this._registros = registros;
    this.ordenarRegistrosPorFecha();
  }

  eliminarRegistro(id: number) {
    this._registros = this._registros.filter((registroItem) => registroItem.id !== id);
    this.ordenarRegistrosPorFecha();
    this.saveLocalStorage();
  }

  ordenarRegistrosPorFecha(){
    this._registros = this.registros.sort((a,b)=>new Date(a.fecha).getTime()- new Date(b.fecha).getTime());
  }
}
