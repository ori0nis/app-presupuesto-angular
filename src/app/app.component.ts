import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FormComponent } from "./form/form.component";
import { IngresosComponent } from "./ingresos/ingresos.component";
import { GastosComponent } from "./gastos/gastos.component";
import { Ingreso } from './ingresos/ingreso.model';
import { Gasto } from './gastos/gasto.model';
import { IngresoService } from './ingresos/ingreso.service';
import { GastoService } from './gastos/gasto.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FormComponent, IngresosComponent, GastosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  ingresos: Ingreso[] = [];
  gastos: Gasto[] = [];

  constructor(private ingresoService: IngresoService, private gastoService: GastoService){
    // Recordar que aquí hay que utilizar this. también en los servicios porque si no, no estamos referenciando las variables inyectadas en el constructor:
    this.ingresos = this.ingresoService.ingresos;
    this.gastos = this.gastoService.gastos;
  }

  getIngresosTotales(){
    return this.ingresos.reduce((total, ingreso) => total + ingreso.valor, 0);
  }

  getGastosTotales(){
    return this.gastos.reduce((total, gasto) => total + gasto.valor, 0);
  }

  getPorcentajeTotal(){
    return this.getGastosTotales() / this.getIngresosTotales();
  }

  getPresupuestoTotal(){
    return this.getIngresosTotales() - this.getGastosTotales();
  }
}
