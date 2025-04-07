
    const API_KEY = "3e867330616c39fa60d18a1af5d82f16"

    async function obterDatosCidades(city) {
      const apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
      try {
        const response = await fetch(apiURL);
        return await response.json();
      } catch (error) {
        console.error("Error al obtener datos del clima:",
          error);
      }
    }

async function obterCoordenadas() {

    let resultados = document.getElementById("resultados");
    let city = document.getElementById("cidade").value;

    const coordenadas = await obterDatosCidades(city);

    if(city) {
        let resultadosHTML = "";

        if(coordenadas && coordenadas.length > 0){

            coordenadas.forEach(coordenada => {
                resultadosHTML += `
                <div class="ciudad">
                    <h3>${coordenada.name}</h3>
                    <p>${coordenada.lat}, ${coordenada.lon}</p>
                    <button onclick="abrirDetalleMeteo(${coordenada.lat}, ${coordenada.lon})">Ver detalle</button>
                </div>
                `;
            }

            );

        resultados.innerHTML = resultadosHTML;

    }

    
}}



    function abrirDetalleMeteo(lat, lon) {
        const urlDetalle = `index.html?lat=${lat}&lon=${lon}`;
        window.open(urlDetalle, '_self');
      }
      