import { Injectable } from '@angular/core';
import { CategoriasEgreso, CategoriasIngreso, Registro} from '../models/models';

@Injectable({
  providedIn: 'root'
})

export class RegistroService {

  private _registros : Registro [] = [{ //TODO: eliminar estos registros
    id: 1,
    ingreso: false,
    fecha: new Date(),
    categoria: CategoriasEgreso.Alquiler,
    monto: 40000,
    titulo: "DesdeServicio1"
  },{
    id: 2,
    ingreso: true,
    fecha: new Date(),
    categoria: CategoriasIngreso.IngresosExtra,
    monto: 4000,
    titulo: "DesdeServicio2"
  },{
    id: 3,
    ingreso: false,
    fecha: new Date(),
    categoria: CategoriasEgreso.Supermercado,
    monto: 13000,
    titulo: "DesdeServicio3"
  },{
    id: 4,
    ingreso: true,
    fecha: new Date(),
    categoria: CategoriasIngreso.Inversiones,
    monto: 8000,
    titulo: "DesdeServicio4"
  },];//TODO: eliminar estos registros cuando esté listo el componente agregarRegistros

  constructor() { 
    this.saveLocalStorage(); // TODO: eliminar esta linea cuando esté el componente de agregar registro
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
    this._registros = this._registros.filter((registroItem)=> registroItem.id !==  id);
    this.saveLocalStorage();
   }
  
}
