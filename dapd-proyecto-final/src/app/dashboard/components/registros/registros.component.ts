import { Component, OnInit } from '@angular/core';
import { ActionSheetController} from '@ionic/angular';
import { Registro } from '../../models/models';
import { RegistroService } from '../../services/registro.service';
import { AlertController } from '@ionic/angular';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss'],
})
export class RegistrosComponent implements OnInit {

  constructor(private registroService: RegistroService, public actionSheetController: ActionSheetController) { }
  registro : Registro[] = []

  //valida si no hay registros
  noHayRegistros : boolean = false;

  ngOnInit() : void {
    this.registroService.registros
    
    // console.log(this.registroService.registros)//TODO: eliminar esta linea
  }

  ngDoCheck(){
    this.checkRegistros();
  }

  get registros(){
    return this.registroService.registros;
  }

  async abrirActionSheet(item: any){
    const actionSheet = await this.actionSheetController.create(
      {
        buttons: [
          {
            text: 'Eliminar',
            icon: 'trash',
            role: 'destructive',
            data: {
              action: 'delete'
            },
            handler: ()=>{
              this.eliminarRegistroId(item)
            },
          },
          {
            text: 'Cancelar',
            icon: 'close',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]
      });
      actionSheet.present();
  }
  
 checkRegistros(){
  let registros = this.registros;
  if (registros.length == 0){
    this.noHayRegistros = true;
  }else{
    this.noHayRegistros =false;
  }
 }
    
  eliminarRegistroId(item: any){
    this.registroService.eliminarRegistro(item.id)
  }


}
 
 


