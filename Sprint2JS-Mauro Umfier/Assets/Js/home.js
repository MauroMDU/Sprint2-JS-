
// Obtener el elemento contenedor para las tarjetas de eventos en la página Home
const eventosContainer = document.getElementById('eventos-container');
console.log(data);
// Generar el template dinámico para cada evento
for (let i = 0; i < data.events.length; i++) {
  const evento = data.events[i];
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
  eventosContainer.innerHTML += eventoTemplate;
}
