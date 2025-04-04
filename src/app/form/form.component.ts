import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../ingresos/ingreso.service';
import { GastoService } from '../gastos/gasto.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { Gasto } from '../gastos/gasto.model';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  tipo: string = "ingresoOperacion";

  // Definimos los input del form:
  descripcionInput: string | null = null;
  valorInput: number | null = null;

  constructor(private ingresoServicio: IngresoService, private gastoServicio: GastoService){}

  tipoOperacion(evento: Event){
    const target = evento.target as HTMLSelectElement;
    this.tipo = target.value;
  }

  agregarValor(){
    if(this.descripcionInput !== null && this.valorInput !== null){
      if(this.tipo === "ingresoOperacion"){
        this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput))
      } else {
        this.gastoServicio.gastos.push(new Gasto(this.descripcionInput, this.valorInput))
      }
    } else {
      console.log("Introduce valores válidos")
    }
    this.descripcionInput = null;
    this.valorInput = null;
  }
}
