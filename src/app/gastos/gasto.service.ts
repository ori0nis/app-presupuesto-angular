import { Injectable } from '@angular/core';
import { Gasto } from './gasto.model';

@Injectable({
  providedIn: 'root'
})
export class GastoService {

  gastos: Gasto[] = [
      new Gasto("Alquiler", 800),
      new Gasto("Tickets concierto", 250)
  ];

  eliminar(gasto: Gasto){
    const indice: number = this.gastos.indexOf(gasto);
    this.gastos.splice(indice, 1);
  }
}
