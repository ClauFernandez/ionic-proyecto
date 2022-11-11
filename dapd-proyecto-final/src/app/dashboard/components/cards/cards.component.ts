import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/shared/models/models';
import { RegistroService } from 'src/app/shared/services/registro.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor(private registroService: RegistroService) {}
  registro: Registro[];
  gastos: number = 0;
  ingresos: number = 0;
  balance: number = 0;

  registrosPositivos() {
    let suma: number = 0;
    this.registro = this.registroService.registros;
    for (let i: number = 0; i < this.registro.length; i++) {
      if (this.registro[i].ingreso) {
        suma = suma + this.registro[i].monto;
      }
    }
    return suma;
  }

  registrosNegativos() {
    let suma: number = 0;
    this.registro = this.registroService.registros;
    for (let i: number = 0; i < this.registro.length; i++) {
      if (!this.registro[i].ingreso) {
        suma = suma + this.registro[i].monto;
      }
    }
    return suma;
  }

  ngOnInit() {
    this.gastos = this.registrosNegativos();
    this.ingresos = this.registrosPositivos();
    this.balance = this.registrosPositivos() - this.registrosNegativos();
  }

  ngDoCheck() {
    this.gastos = this.registrosNegativos();
    this.ingresos = this.registrosPositivos();
    this.balance = this.registrosPositivos() - this.registrosNegativos();
  }
}
