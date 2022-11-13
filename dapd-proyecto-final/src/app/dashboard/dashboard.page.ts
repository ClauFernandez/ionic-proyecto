import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../auth/servicios/auth.service';
import { ModalRegistrosComponent } from './components/modal-registros/modal-registros.component';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public userName:string;

  constructor(
    private authService: AuthService,
    private router: Router,
    public photoService: PhotoService,
    public domSanitizer: DomSanitizer,
    public route: ActivatedRoute,
    private modalCtrl: ModalController) {}

  async ngOnInit() {
    this.userName = this.route.snapshot.data.userName;
    await this.photoService.loadSaved();
  }

  logout()  {
    this.authService.logout().subscribe(()  =>  this.router.navigate(['/login']));
  }

  async openModal(ingreso: boolean) {
    const modal = await this.modalCtrl.create({
      component: ModalRegistrosComponent,
      componentProps: { ingreso },
      cssClass: 'modal-registro',
    });
    return await modal.present();
  }
}
