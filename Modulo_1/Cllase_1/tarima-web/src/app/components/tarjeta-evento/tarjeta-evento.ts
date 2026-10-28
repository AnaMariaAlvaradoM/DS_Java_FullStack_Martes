import { Component, input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Evento } from '../../models/evento';
import { Etiqueta } from '../../shared/etiqueta/etiqueta';

@Component({
  imports: [Etiqueta, CurrencyPipe, DatePipe],
  selector: 'app-tarjeta-evento',
  styleUrl: './tarjeta-evento.css',
  templateUrl: './tarjeta-evento.html',
})
export class TarjetaEvento {
  evento = input.required<Evento>();
  mostrarDescripcion = false;

  estaAgotado(): boolean {
    return this.evento().cuposDisponibles === 0;
  }

  quedanPocosCupos(): boolean {
    const cupos = this.evento().cuposDisponibles;
    return cupos > 0 && cupos <= 10;
  }

  alternarDescripcion(): void {
    this.mostrarDescripcion = !this.mostrarDescripcion;
  }
}