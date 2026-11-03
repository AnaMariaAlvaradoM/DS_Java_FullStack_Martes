interface Evento {
  id: number;
  nombre: string;
  categoria: string;
  fecha: string;
  lugar: string;
  precio: number;
  cuposDisponibles: number;
}

const risas: Evento = {
  id: 3,
  nombre: 'Risas sin Filtro',
  categoria: 'Stand-up',
  fecha: 'Jueves 12 de noviembre · 9:00 p. m.',
  lugar: 'Bodega Cultural del Centro',
  precio: 30000,
  cuposDisponibles: 0,
};

function estaAgotado(evento: Evento): boolean {
  return evento.cuposDisponibles === 0;
}

console.log(estaAgotado(risas));