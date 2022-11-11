import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { RegistroService } from 'src/app/shared/services/registro.service';

@Component({
  selector: 'app-modal-registros',
  templateUrl: './modal-registros.component.html',
  styleUrls: ['./modal-registros.component.scss'],
})
export class ModalRegistrosComponent implements OnInit {
  @Input() ingreso: boolean;

  agregarRegistroForm: FormGroup;
  registroService: RegistroService;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.agregarRegistroForm = this.formBuilder.group({
      id: new FormControl(new Date().getTime()),
      fecha: new FormControl(new Date(), [Validators.required]),
      titulo: new FormControl(null, [Validators.required]),
      monto: new FormControl(null, [Validators.required, Validators.min(1)]),
      categoria: new FormControl(null, [Validators.required]),
      ingreso: new FormControl(this.ingreso),
    });
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  confirm() {
    console.log(this.agregarRegistroForm.value);
    //aca hay que capturar los datos
    //this.registroService.crearRegistro();
    this.modalCtrl.dismiss();
  }
}
