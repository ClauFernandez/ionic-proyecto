import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Usuario } from '../modelos/usuario.model';
import { environment } from 'src/environments/environment';
import { Http } from '@capacitor-community/http';
import { HttpOptions } from '@capacitor/core';
import { tap } from 'rxjs/operators';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = Http;

  constructor(private storageService: StorageService) {
  }

  login(user: Usuario) {
    const endpoint = `${environment.api}/login`;
    const options: HttpOptions = {
      url: endpoint,
      method: 'POST',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type': 'application/json' },
      data: { user }
    };
    return from(this.http.request(options))
      .pipe(tap(async ({ status, data:{userName} }) => {
        await this.storageService.set('loggedIn', status === 200);
        if(status===200) await this.storageService.set('userName', userName);
      }));
  }

  logout() {
    const endpoint = `${environment.api}/logout`;
    return from(this.http.post({ url: endpoint }))
      .pipe(tap(async ({status}) =>{
        await this.storageService.set('loggedIn', status !== 200);
        if(status===200) await this.storageService.remove('userName');
      }));
  }
}
