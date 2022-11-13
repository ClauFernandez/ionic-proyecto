import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { RegistrosComponent } from './components/registros/registros.component';
import { ModalRegistrosComponent } from './components/modal-registros/modal-registros.component';
import { AgregarRegistrosComponent } from './components/agregar-registros/agregar-registros.component';

@NgModule({
  entryComponents:[ModalRegistrosComponent],
  imports: [CommonModule, FormsModule, IonicModule, DashboardPageRoutingModule, ReactiveFormsModule],
  declarations: [DashboardPage, RegistrosComponent, CardsComponent, ModalRegistrosComponent,AgregarRegistrosComponent],
})
export class DashboardPageModule {}
