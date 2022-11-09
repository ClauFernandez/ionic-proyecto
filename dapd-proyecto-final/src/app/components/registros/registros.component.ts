import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/shared/services/registro.service';
import { Registro, CategoriasEgreso} from 'src/app/shared/models/models';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss'],
})
export class RegistrosComponent implements OnInit {

  constructor(private registroService: RegistroService) { }
  registro : Registro ={
    ingreso: false,
    fecha: new Date(),
    categoria: CategoriasEgreso.Regalos,
    monto: 2000,
    titulo: "registroDesdeBotón"
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
    console.log(this.registro);
  }

  eliminarRegistro(){
    this.registroService.eliminarRegistro();
    //TODO: BORRAR CONSOLE.LOG!!!!!!!!!!!!!
    console.log(this.registro);
  }

}
