import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { RegistrosComponent } from './components/registros/registros.component';
import { RegistroService } from './shared/services/registro.service';

@NgModule({
  declarations: [AppComponent, RegistrosComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, RegistroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
