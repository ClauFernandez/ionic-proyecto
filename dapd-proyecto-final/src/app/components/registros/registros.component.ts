import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/shared/services/registro.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss'],
})
export class RegistrosComponent implements OnInit {

  constructor(private registroService: RegistroService) { }

  ngOnInit() : void {
    this.registroService.registros;
  }



  get registros(){
    return this.registroService.registros;
  }
}
