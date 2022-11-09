import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.page.html',
  styleUrls: ['./modal-registro.page.scss'],
})
export class ModalRegistroPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  cancel() {
    this.modalCtrl.dismiss();
  }

  confirm() {
    this.modalCtrl.dismiss(); //aca hay que capturar los datos
  }
}
