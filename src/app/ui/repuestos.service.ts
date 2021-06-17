import { Injectable } from '@angular/core';
import { RepuestoModel } from './repuestos/respuesto.model';

@Injectable({
  providedIn: 'root',
})
export class RepuestosSeleccionadosService {
  repuestosSeleccionados: RepuestoModel[] = [];
  constructor() {}

  agregarRepuestoSeleccionado(repuesto: RepuestoModel) {
    this.repuestosSeleccionados = [...this.repuestosSeleccionados, repuesto];
  }

  actualizarRepuestoSeleccionado(index: number, repuesto: RepuestoModel){
    this.repuestosSeleccionados[index] = repuesto;
  }
}
