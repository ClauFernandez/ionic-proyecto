import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/servicios/auth.service';
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
    public route: ActivatedRoute) { }

  async ngOnInit() {
    this.userName = this.route.snapshot.data.userName;
    await this.photoService.loadSaved();
  }

  logout() {
    this.authService.logout().subscribe(() => this.router.navigate(['/login']));
  }
}
