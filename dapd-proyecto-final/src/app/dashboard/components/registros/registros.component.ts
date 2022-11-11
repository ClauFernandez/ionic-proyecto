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
    id     : new Date().getTime(),
    ingreso: false,
    fecha: new Date(),
    categoria: CategoriasEgreso.Regalos,
    monto: 2000,
    titulo: "registroDesdeBotón"
  }//TODO: eliminar este registro cuando este listo el componente agregarRegistro.

  ngOnInit() : void {
    this.registroService.registros;
  }

  get registros(){
    return this.registroService.registros;
  }

 
  crearRegistro (){
    this.registroService.crearRegistro(this.registro);
    console.log(this.registro);
  } //TODO: eliminar este registro cuando este listo el componente agregarRegistro.

  eliminarRegistroId(item: any){
    this.registroService.eliminarRegistro(item.id)
    console.log(this.registro);
  }

}
