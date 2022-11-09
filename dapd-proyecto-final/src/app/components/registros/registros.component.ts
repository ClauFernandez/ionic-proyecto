import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/shared/services/registro.service';
import { Registro } from 'src/shared/models/models';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss'],
})
export class RegistrosComponent implements OnInit {

  constructor(private registroService: RegistroService) { }
  registro : Registro ={
    categoria: "3",
    fecha: new Date(),
    ingreso: true,
    monto: 400,
    titulo: "registroEjDesdeCrear"
  }

  ngOnInit() : void {
    this.registroService.registros;
  }

  get registros(){
    return this.registroService.registros;
  }

  crearRegistro (){
    this.registroService.crearRegistro(this.registro);
    //TODO: BORRAR CONSOLE.LOG!!!!!!!!!!!!!
    console.log();
  }

  eliminarRegistro(){
    this.registroService.eliminarRegistro();
    //TODO: BORRAR CONSOLE.LOG!!!!!!!!!!!!!
    console.log();
  }

}
