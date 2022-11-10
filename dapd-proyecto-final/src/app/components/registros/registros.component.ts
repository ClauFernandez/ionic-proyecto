import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/shared/services/registro.service';
import { Registro, CategoriasEgreso } from 'src/app/shared/models/models';
import { DefaultTitleStrategy } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss'],
})
export class RegistrosComponent implements OnInit {
  constructor(private registroService: RegistroService) {}
  registro: Registro = {
    id: new Date().getTime(),
    ingreso: false,
    fecha: new Date(),
    categoria: CategoriasEgreso.Regalos,
    monto: 2000,
    titulo: 'registroDesdeBotón',
  }; //TODO: eliminar este registro!!

  ngOnInit(): void {
    this.registroService.registros;
  }

  get registros() {
    return this.registroService.registros;
  }

  //TODO: eliminar esto métodos, se usan para probar servicios.

  crearRegistro() {
    this.registroService.crearRegistro(this.registro);
    //TODO: BORRAR CONSOLE.LOG!!!!!!!!!!!!!
    console.log(this.registro);
  }

  //TODO: los metodos eliminar deben ser borrados de acá
  eliminarRegistro() {
    this.registroService.eliminarRegistro2();
    //TODO: BORRAR CONSOLE.LOG!!!!!!!!!!!!!
    console.log(this.registro);
  }

  // eliminarRegistroId(){
  //   this.registroService.eliminarRegistroId(this.registro)
  //   //TODO: BORRAR CONSOLE.LOG!!!!!!!!!!!!!
  //   console.log(this.registro);
  // }
}
