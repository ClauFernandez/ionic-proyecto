import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrosComponent } from './components/registros/registros.component';
import { RegistroService } from './shared/services/registro.service';

@NgModule({
  declarations: [AppComponent, RegistrosComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, RegistroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
