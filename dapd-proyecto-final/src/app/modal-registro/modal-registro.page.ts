import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.page.html',
  styleUrls: ['./modal-registro.page.scss'],
})
export class ModalRegistroPage implements OnInit {
  @Input() ingreso: boolean;

  agregarRegistroForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.agregarRegistroForm = this.formBuilder.group({
      fecha: new FormControl(new Date(), [Validators.required]),
      detalle: new FormControl(null, [Validators.required]),
      monto: new FormControl(null, [Validators.required, Validators.min(1)]),
      categoria: new FormControl(null, [Validators.required]),
    });
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  confirm() {
    console.log(this.agregarRegistroForm.value);
    this.modalCtrl.dismiss(); //aca hay que capturar los datos
  }
}
