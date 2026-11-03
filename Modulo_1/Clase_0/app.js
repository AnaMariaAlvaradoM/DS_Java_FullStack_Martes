const eventos = [
  {
    id: 1,
    nombre: 'Noche de Salsa Brava',
    categoria: 'Concierto',
    fecha: 'Sábado 7 de noviembre · 8:00 p. m.',
    lugar: 'Teatro del Parque',
    precio: 45000,
    cuposDisponibles: 120,
  },
  {
    id: 2,
    nombre: 'La Casa de las Voces',
    categoria: 'Teatro',
    fecha: 'Domingo 8 de noviembre · 7:30 p. m.',
    lugar: 'Sala Chapinero',
    precio: 38000,
    cuposDisponibles: 6,
  },
  {
    id: 3,
    nombre: 'Risas sin Filtro',
    categoria: 'Stand-up',
    fecha: 'Jueves 12 de noviembre · 9:00 p. m.',
    lugar: 'Bodega Cultural del Centro',
    precio: 30000,
    cuposDisponibles: 0,
  },
  {
    id: 4,
    nombre: 'Jazz en la Terraza',
    categoria: 'Concierto',
    fecha: 'Sábado 14 de noviembre · 6:00 p. m.',
    lugar: 'Terraza Usaquén',
    precio: 0,
    cuposDisponibles: 80,
  },
];

const cartelera = document.querySelector('#cartelera');

function textoDelPrecio(precio) {
  if (precio === 0) {
    return 'Entrada libre';
  }
  return `$ ${precio.toLocaleString('es-CO')}`;
}

function textoDeCupos(cupos) {
  if (cupos === 0) {
    return 'Agotado';
  }
  if (cupos === 1) {
    return 'Último cupo';
  }
  if (cupos <= 10) {
    return `Últimos ${cupos} cupos`;
  }
  return `${cupos} cupos disponibles`;
}

function crearTarjeta(evento) {
  const agotado = evento.cuposDisponibles === 0;
  return `
    <article class="tarjeta ${agotado ? 'agotada' : ''}">
      <span class="categoria">${evento.categoria}</span>
      <h3>${evento.nombre}</h3>
      <p>${evento.fecha}</p>
      <p>${evento.lugar}</p>
      <p class="precio">${textoDelPrecio(evento.precio)}</p>
      <p>${textoDeCupos(evento.cuposDisponibles)}</p>
      <button data-id="${evento.id}" ${agotado ? 'disabled' : ''}>Reservar</button>
    </article>
  `;
}

function pintar() {
  cartelera.innerHTML = eventos.map(crearTarjeta).join('');
}

cartelera.addEventListener('click', (clic) => {
  const id = Number(clic.target.dataset.id);
  const elegido = eventos.find((evento) => evento.id === id);
  if (!elegido || elegido.cuposDisponibles === 0) {
    return;
  }
  elegido.cuposDisponibles = elegido.cuposDisponibles - 1;
  pintar();
});

pintar();