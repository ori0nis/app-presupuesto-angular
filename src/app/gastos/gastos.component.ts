import { Component, Input } from '@angular/core';
import { Gasto } from './gasto.model';
import { GastoService } from './gasto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gastos',
  imports: [CommonModule],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {

  gastos: Gasto[] = [];

  @Input() ingresosTotales!: number;

  constructor(private gastoServicio: GastoService){
    this.gastos = this.gastoServicio.gastos;
  }

  eliminarGasto(gasto: Gasto){
    this.gastoServicio.eliminar(gasto);
  }

  calcularPorcentaje(gasto: Gasto){
    return gasto.valor / this.ingresosTotales;
  }
}
