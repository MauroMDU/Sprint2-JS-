// Obtener la fecha base para eventos pasados
const fechaBase = new Date();

// Obtener el elemento contenedor para las tarjetas de eventos pasados
const eventosPasadosContainer = document.getElementById('eventos-container');

// Recorrer la array de eventos y generar el template solo para los eventos del 2022
for (let i = 0; i < data.events.length; i++) {
  const evento = data.events[i];
  const eventoDate = new Date(evento.date);
  
  // Filtrar solo los eventos del 2022
  if (eventoDate.getFullYear() === 2022 && eventoDate < fechaBase) {
    const eventoTemplate = `
      <div class="box-one">
        <div class="card" style="width: 14rem;">
          <img src="${evento.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <a href="#" class="btn btn-primary">Más detalles</a>
          </div>
        </div>
      </div>
    `;
    eventosPasadosContainer.innerHTML += eventoTemplate;
  }
}

