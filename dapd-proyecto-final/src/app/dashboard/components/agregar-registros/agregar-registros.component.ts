import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalRegistrosComponent } from '../modal-registros/modal-registros.component';

@Component({
  selector: 'app-agregar-registros',
  templateUrl: './agregar-registros.component.html',
  styleUrls: ['./agregar-registros.component.scss'],
})
export class AgregarRegistrosComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  
  async openModal(ingreso: boolean) {
    const modal = await this.modalCtrl.create({
      component: ModalRegistrosComponent,
      componentProps: { ingreso },
      cssClass: 'modal-registro',
    });
    return await modal.present();

  }

}
