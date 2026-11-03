export type Categoria = 'Concierto' | 'Teatro' | 'Stand-up';

export interface Evento {
  id: number;
  nombre: string;
  categoria: Categoria;
  fecha: string;
  lugar: string;
  precio: number;
  cuposDisponibles: number;
  descripcion: string;
}