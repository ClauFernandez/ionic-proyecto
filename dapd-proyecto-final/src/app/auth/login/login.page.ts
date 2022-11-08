import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from '../modelos/usuario.model';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginForm.value as Usuario)
      .subscribe(
        ({status, data: resp}) => {
          if(status === 200){
            this.loginForm.reset();
            this.router.navigateByUrl('/dashboard');
          }else{
            this.mostrarToast(resp.mesagge, 'danger');
          }
        },
        ({ data: resp }) => {
          this.mostrarToast(resp.mesagge, 'danger');
        }
      );
  }

  async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: 'top',
      color
    });

    await toast.present();
  }
}
