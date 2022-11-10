import { Injectable } from '@angular/core';
import { CategoriasEgreso, CategoriasIngreso, Registro} from '../models/models';

@Injectable({
  providedIn: 'root'
})

//TODO: eliminar estos registros
export class RegistroService {

  private _registros : Registro [] = [{
    id: new Date().getTime(),
    ingreso: false,
    fecha: new Date(),
    categoria: CategoriasEgreso.Alquiler,
    monto: 40000,
    titulo: "DesdeServicio1"
  },{
    id: new Date().getTime(),
    ingreso: true,
    fecha: new Date(),
    categoria: CategoriasIngreso.IngresosExtra,
    monto: 4000,
    titulo: "DesdeServicio2"
  },{
    id: new Date().getTime(),
    ingreso: false,
    fecha: new Date(),
    categoria: CategoriasEgreso.Supermercado,
    monto: 13000,
    titulo: "DesdeServicio3"
  },{
    id: new Date().getTime(),
    ingreso: true,
    fecha: new Date(),
    categoria: CategoriasIngreso.Inversiones,
    monto: 8000,
    titulo: "DesdeServicio4"
  },];

  constructor() { 
    this.loadStorage();
  }
  

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

  loadStorage(){
    const registroStorage = localStorage.getItem('registros');
    if(registroStorage == null){
      return this._registros = []
    }
    let registros: Registro[] = JSON.parse(registroStorage);
    this._registros = registros ;
  }

  
  eliminarRegistro(id: number){
    this._registros = this._registros.filter((registroItem)=> registroItem.id !==id)
    this.saveLocalStorage()
   }

  
}
