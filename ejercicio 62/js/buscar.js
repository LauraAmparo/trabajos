
    //tiempo de diferentes ciudades


    //   async function verTiempoEnCiudades(ciudades) {
    //     const resultados = [];
    //     for (const ciudad of ciudades) {
    //       const { lat, lon } = ciudad;
    //       const datosCiudad = await obterDatosTempo(lat, lon);
    //       if (datosCiudad) {
    //         resultados.push({
    //           nombre: datosCiudad.name,
    //           temperatura: `${Math.round(datosCiudad.main.temp)}ºC`,
    //           descripcion: datosCiudad.weather[0].description,
    //         });
    //       }
    //     }
    //     return resultados;
    //   }
  
    //   // Ejemplo de uso
    //   const ciudades = [
    //     { lat: 40.4168, lon: -3.7038 }, // Madrid
    //     { lat: 41.3879, lon: 2.16992 }, // Barcelona
    //     { lat: 37.7749, lon: -122.4194 }, // San Francisco
    //     { lat: 48.8566, lon: 2.3522 }, // Paris
    //     { lat: 51.5074, lon: -0.1278 }, // London
    //   ];
    // ];
  
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