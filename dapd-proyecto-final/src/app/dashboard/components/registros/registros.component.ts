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

  constructor(private registroService: RegistroService, public actionSheetController: ActionSheetController, private alertController: AlertController, private modalCtrl : ModalController) { }
  registro : Registro = {
    id: 123,
    categoria: null,
    fecha: null,
    ingreso: null,
    monto: 0,
    titulo: '',
  }
  handlerMessage = '';
  roleMessage = '';

  
  // registro : Registro[] = [];

  //valida si no hay registros
  noHayRegistros : boolean = false;

  ngOnInit() : void {
    this.registroService.registros
    this.checkRegistros();
    console.log(this.registros)
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
              console.log("eliminar desde actionSheet")
            }
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

  // crearRegistro (){
  //   this.registroService.crearRegistro(this.registro);
  // } //TODO: eliminar este registro cuando este listo el componente agregarRegistro.
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.eliminarRegistroId(123)
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

   async abrirModal(ingreso: boolean) {
    const modal = await this.modalCtrl.create({
      component: ModalRegistrosComponent,
      componentProps: { ingreso  },
      cssClass: 'modal-registro',
    });
    return await modal.present();
  }


  
  eliminarRegistroId(item: any){
    if(confirm)
    this.registroService.eliminarRegistro(item.id)
  }
}
