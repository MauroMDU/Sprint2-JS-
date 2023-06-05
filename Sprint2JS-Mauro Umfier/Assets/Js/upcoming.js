// Obtener el elemento contenedor para las tarjetas de eventos futuros
const eventosFuturosContainer = document.getElementById('eventos-container');

// Recorrer la array de eventos y generar el template solo para los eventos del año 2023
for (let i = 0; i < data.events.length; i++) {
  const evento = data.events[i];
  const eventoDate = new Date(evento.date);
  
  // Filtrar solo los eventos del año 2023
  if (eventoDate.getFullYear() === 2023) {
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
    eventosFuturosContainer.innerHTML += eventoTemplate;
  }
}
