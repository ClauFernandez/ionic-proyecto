import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario.model';
import { RespuestaApi } from '../modelos/respuestaApi.model';
import { environment } from 'src/environments/environment';
import { Http } from '@capacitor-community/http';
import { HttpOptions } from '@capacitor/core';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;
  private http = Http;

  constructor() {
    this.loggedIn = new BehaviorSubject(false);
  }

  login(user: Usuario){
    const endpoint = `${environment.api}/login`;
    const options: HttpOptions = {
      url: endpoint,
      method: 'POST',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      headers: { 'Content-Type': 'application/json'},
      data: { user }
    };
    return from(this.http.request(options));
  }

  logout(){
    const endpoint = `${environment.api}/logout`;
    return from(this.http.post({url:endpoint}));
  }
}
