import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Registro } from '../../models/models';
import { RegistroService } from '../../services/registro.service';
import { AlertController } from '@ionic/angular';
import { ModalRegistrosComponent } from '../modal-registros/modal-registros.component';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss'],
})
export class RegistrosComponent implements OnInit {

  constructor(private registroService: RegistroService, public actionSheetController: ActionSheetController, private modalControl : ModalController) { }
  registro : Registro[] = []

  //valida si no hay registros
  noHayRegistros : boolean = false;

  ngOnInit() : void {
    this.registroService.registros
    this.checkRegistros();
  }

  ngDoCheck(){
    this.checkRegistros();
  }

  get registros(){
    return this.registroService.registros;
  }

  async abrirActionSheet(){
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
              console.log("eliminar desde actionSheet");
              this.eliminarRegistroId(123);
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
  
   async abrirModal(item : boolean) {
    const modal = await this.modalControl.create({
      component: ModalRegistrosComponent,
      componentProps: {item},
    });
    return await modal.present();
  }//TODO: eliminar este metodo cuando este listo el componente agregarRegistro


  
  eliminarRegistroId(item: any){
    this.registroService.eliminarRegistro(item.id)
  }
}
