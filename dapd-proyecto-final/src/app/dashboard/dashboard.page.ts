import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../auth/servicios/auth.service';
import { ModalRegistrosComponent } from './components/modal-registros/modal-registros.component';
//import { ModalRegistroPage } from '../modal-registro/modal-registro.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  async openModal(ingreso: boolean) {
    const modal = await this.modalCtrl.create({
      component: ModalRegistrosComponent,
      componentProps: { ingreso },
      cssClass: 'modal-registro',
    });
    return await modal.present();
  }

  logout() {
    this.authService.logout().subscribe(() => this.router.navigate(['/login']));
  }
}
