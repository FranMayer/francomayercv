const nombre = "Franco Mayer"

const experiencia = [
    {
        lugar: "Funiversity LA",
        periodo: "Feb 2023 - Actualidad",
        descripción: "Actualmente trabajo en el area de desarrollo y soporte dando asistencia a personas que realizan capacitaciones en la empresa, generando base de conocimiento en Confluence(Atlassian) para facilitar el apoyo de los estudiantes no solo del area técnica si no de todas las areas relacionadas."
    },
    {
    lugar: "Funiversity LA",
    periodo: "Abr 2022 -  Feb 2023",
    descripción: "Capacitando jovenes de entre 9 a 14 años acerca de robotica y electronica, impartiendo clases de una hora y media de duración. El contenido incluida logica basica de programación, variables, funciones, POO, en lenguaje C++ con la ayuda de Tinkercad, programa de diseño de circuitos y programación"
    },
    {
    lugar: "Apex America BPO",
    periodo: "Oct 2021 - Abr 2022",
    descripción: "Area de Loyalty(Fidelización)<br> Generando la fidelización de clientes de la empresa Claro. Realización de tareas de gestión y control de objetivos asi como tambien la venta de planes de telefono celular. Atención telefónica."
    }
];

const estudios = [{
    lugar: "Coderhouse",
    periodo: "2022-2023",
    descripción: "Desarrollador Web Front End"
    },
    {
        lugar: "Oracle + Alura Latam",
        periodo: "2022-2023",
        descripción: "Desarrollo Web Front End"
    },
    {
        lugar: "Google Learn Active",
        periodo: "2021-2022",
        descripción: "HTML + CSS - Inicios en la programación"
    }
];

const lenguajesActuales = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
]

const lenguajesAprendiendo = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    "https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg",
]

// Cambia el nombre del H1 que con tiene el nombre del usuario
var nombreDOM = document.getElementById("name")
nombreDOM.innerText = nombre

// Itineración que crea los items en "Experiencia"
for (i = 0; i < experiencia.length; i++){
    var item = document.createElement("div")
    item.innerHTML =
    `<div class="d-flex justify-content-between mt-3">
    <span class="card-title h6 exp-title">${experiencia[i].lugar}</span>
    <span class="exp-date">${experiencia[i].periodo}</span>
    </div>
    <p>${experiencia[i].descripción}</p>`
    document.getElementById("experiencia").appendChild(item)
}

// Itineración que crea los items en "Estudios"
for (i = 0; i < estudios.length; i++){
    var item = document.createElement("div")
    item.innerHTML =
    `<div class="d-flex justify-content-between">
    <span class="card-title h6 exp-title">${estudios[i].lugar}</span>
    <span class="exp-date">${estudios[i].periodo}</span>
    </div>
    <p>${estudios[i].descripción}</p>`
    document.getElementById("estudios").appendChild(item)
}

// Itineración que crea los items en "Lenguajes y programas"
for (i = 0; i < lenguajesActuales.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesActuales[i]}" />`
    document.getElementById("lenguajes_actuales").appendChild(item)
}

// Itineración que crea los items en "Lenguajes y tecnologias aprendiendo"
for (i = 0; i < lenguajesAprendiendo.length; i++){
    var item = document.createElement("div")
    item.innerHTML = `<img class="languages" align="left" alt="JavaScript" width="40" src="${lenguajesAprendiendo[i]}" />`
    document.getElementById("lenguajes_aprendiendo").appendChild(item)
}


function printDiv(printable){
    var printContents = document.getElementById(printable).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}