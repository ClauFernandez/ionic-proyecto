import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/servicios/storage.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolver implements Resolve<boolean> {
  constructor(private storageService: StorageService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.storageService.get('userName');
  }
}
