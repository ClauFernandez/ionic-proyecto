import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/dashboard/services/registro.service';
import { Registro, CategoriasEgreso } from 'src/app/dashboard/models/models';
import { DefaultTitleStrategy } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss'],
})
export class RegistrosComponent implements OnInit {

  constructor(
    private registroService: RegistroService,
    private actionSheetCtrl: ActionSheetController) { }

  ngOnInit(): void {
    this.registroService.registros;
  }

  get registros() {
    return this.registroService.registros;
  }

  async abrirOpciones(id: number) {
    const actionSheet = await this.actionSheetCtrl.create(
      {
        buttons: [
          {
            text: 'Eliminar',
            role: 'destructive',
            data: {
              action: 'delete'
            },
            handler: ()=>console.log('eliminar', id)
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]
      });
      actionSheet.present();
  }
  
  eliminarRegistro(id: number) {
    this.registroService.eliminarRegistro(id);
  }

}
