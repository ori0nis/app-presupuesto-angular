import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() presupuestoTotal!: number;
  @Input() ingresosTotales!: number;
  @Input() gastosTotales!: number;
  @Input() porcentajeTotal!: number;
}
