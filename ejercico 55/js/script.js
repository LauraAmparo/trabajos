//Lista de nomes de estudiantes
const estudiantes = ["Juan", "María", "Pedro", "Ana", "Luis", "Elena", "Carlos", "Laura"];
const container = document.getElementById("container");
container.innerHTML = estudiantes.join(", ");
//Lista de nomes
// Filtrar estudiantes que tienen más de 4 letras

container.innerHTML += `<p>${estudiantes.filter(estudiante => estudiante.length > 4).join(", ")}</p>`;

//actividade 2

container.innerHTML +=  estudiantes.map(estudiante => estudiante.toUpperCase());

// actividade 3
estudiantes.pop()

container.innerHTML += `<p>${estudiantes.join(", ")}</p>`

// actividad 4

estudiantes.push("Francisco");
container.innerHTML += `<p>${estudiantes.join(", ")}</p>`;

//actividad 5



container.innerHTML += `<p>${estudiantes.slice(2, 4).join(", ")}</p>`;

//actividad 6

estudiantes.unshift("Irene");
container.innerHTML += '<p>' + estudiantes +  '</p>';

//actividad 7

const estudiantesNovos = ["Paula", "Raul"];
container.innerHTML += '<p>' + estudiantes.concat(estudiantesNovos).join(", " ) + '</p>';



