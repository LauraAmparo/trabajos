//Ejercicio 56 - 3 - Deidades romanas
function mostrarDeidade(dia){
    const deidades = {
        "Luns":{
            "Deus":"Luns a Lúa",
"Descripción":"O Luns estaba dedicado á deusa romana Lúa, unha deidade primitiva que foi substituída posteriormente pola deusa Diana"
    },
    "Martes": {
        "Deus": "Martes á Marte",
        "Descripción": "El Martes estaba dedicado al dios romano Marte, o deus da guerra.."
    },
    "Miércoles": {
        "Deus": "Miércoles á Mercurio",
        "Descripción": "El Miércoles estaba dedicado al dios romano Mercurio, o deus do comercio."
    },
    "Jueves": {
        "Deus": "Jueves a Júpiter",
        "Descripción": "El Jueves estaba dedicado al dios romano Júpitero deus principal e supremo."
    },
    "Viernes": {
        "Deus": "Viernes a Venus",
        "Descripción": "El Viernes estaba dedicado a la diosa romana Venusa deusa do amor e do desexo."
    },
    "Sabado": {
        "Deus": "Sábado a Saturno",
"Descripción": "El Sábado estaba dedicado al dios romano Saturno, aínda que o nome nos chega da cultura xudeo-cristiá onde significa 'día de repouso'.."
    },
    "Domingo": {
        "Deus": "Domingo a Apolo",
"Descripción": "El Domingo estaba dedicado al dios romano Apolo, o deus do sol e da sabedoría, motivo polo cal foi elixido polos cristiáns para establecer o Dominus dei ou día do Señor.."
},

}
let deus = document.getElementById("deus")
let descripcion = document.getElementById("descripcion")

switch (dia) {
    case 'Luns':
        deus.textContent = deidades.Luns.Deus;
        descripcion.textContent = deidades.Luns.Descripción;
        break;
    case 'Martes':
        deus.textContent = deidades.Martes.Deus;
        descripcion.textContent = deidades.Martes.Descripción;
        break;
    case 'Miércoles':
        deus.textContent = deidades.Miércoles.Deus;
        descripcion.textContent = deidades.Miércoles.Descripción;
        break;
    case 'Jueves':
        deus.textContent = deidades.Jueves.Deus;
        descripcion.textContent = deidades.Jueves.Descripción;
        break;
    case 'Viernes':
        deus.textContent = deidades.Viernes.Deus;
        descripcion.textContent = deidades.Viernes.Descripción;
        break;
    case 'Sábado':
        deus.textContent = deidades.Sabado.Deus;
        descripcion.textContent = deidades.Sabado.Descripción;
        break;
    case 'Domingo':
        deus.textContent = deidades.Domingo.Deus;
        descripcion.textContent = deidades.Domingo.Descripción;
        break;
    default:
        deus.textContent ='Error';
        descripcion.textContent = 'Error'

    }
}