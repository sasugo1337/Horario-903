const dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
const diasShort = ["L", "M", "M", "J", "V", "S", "D"];
const bloques = [
  {numero: 1, inicio: "6:30 am", fin: "8:20 am"},
  {numero: 2, inicio: "8:20 am", fin: "10:10 am"},
  {numero: 3, inicio: "10:10 am", fin: "10:40 am"},
  {numero: 4, inicio: "10:40 am", fin: "12:10 pm"},
  {numero: 5, inicio: "12:10 pm", fin: "12:40 pm"},
  {numero: 6, inicio: "12:40 pm", fin: "2:20 pm"},
];

const descanso = {
  nombre: "Descanso",
  nombreProfesor: null,
  horarios: [
    {semana: 1, dias: [0, 1, 2, 3, 4], bloque: 3, salon: null},
    {semana: 1, dias: [0, 1, 2, 3, 4], bloque: 5, salon: null},
    {semana: 2, dias: [0, 1, 2, 3, 4], bloque: 3, salon: null},
    {semana: 2, dias: [0, 1, 2, 3, 4], bloque: 5, salon: null},
  ],
  class_: "descanso",
};

const ciencias_naturales = {
  nombre: "Ciencias Narurales",
  nombreProfesor: "Hammes.",
  horarios: [
    {
      semana: 1,
      dias: [1],
      bloque: 2,
      salon: "206",
    },
    {
      semana: 2,
      dias: [1],
      bloque: 4,
      salon: "100",
    },
    {
      semana: 2,
      dias: [2],
      bloque: 1,
      salon: "109",
    },
    {
      semana: 2,
      dias: [3],
      bloque: 4,
      salon: "100",
    },
  ],
  class_: "ciencias_naturales",
};

const informatica = {
  nombre: "Informatica",
  nombreProfesor: "Jhon Fredy.",
  horarios: [
    {
      semana: 2,
      dias: [1],
      bloque: 1,
      salon: "119",
    },
    {
      semana: 2,
      dias: [4],
      bloque: 4,
      salon: "119",
    },
  ],
  class_: "informatica",
};

const matematicas = {
  nombre: "Matemáticas",
  nombreProfesor: "Donaldo F.",
  horarios: [
    {
      semana: 1,
      dias: [3],
      bloque: 2,
      salon: "203",
    },
    {
      semana: 2,
      dias: [0],
      bloque: 6,
      salon: "203",
    },
    {
      semana: 2,
      dias: [3],
      bloque: 1,
      salon: "203",
    },
    {
      semana: 2,
      dias: [4],
      bloque: 2,
      salon: "203",
    },
  ],
  class_: "matematicas",
};

const logica_matematica = {
  nombre: "Lógica Matemática",
  nombreProfesor: "Jhon Jairo.",
  horarios: [
    {
      semana: 1,
      dias: [0],
      bloque: 6,
      salon: "211",
    },
    {
      semana: 2,
      dias: [3],
      bloque: 6,
      salon: "204",
    },
  ],
  class_: "logica_matematica",
};

const laboratorio_lector = {
  nombre: "Laboratorio lector",
  nombreProfesor: "Yadira S.",
  horarios: [
    {
      semana: 1,
      dias: [2],
      bloque: 2,
      salon: "114",
    },
  ],
  class_: "laboratorio_lector",
};

const fisica = {
  nombre: "Física",
  nombreProfesor: "Alix M.",
  horarios: [
    {
      semana: 1,
      dias: [4],
      bloque: 1,
      salon: "210",
    },
    {
      semana: 2,
      dias: [0],
      bloque: 2,
      salon: "205",
    },
  ],
  class_: "fisica",
};

const ingles = {
  nombre: "Inglés",
  nombreProfesor: "Stefany.",
  horarios: [
    {
      semana: 1,
      dias: [1],
      bloque: 4,
      salon: "202",
    },
    {
      semana: 2,
      dias: [4],
      bloque: 6,
      salon: "202",
    },
  ],
  class_: "ingles",
};

const sociales = {
  nombre: "Sociales",
  nombreProfesor: "Sandra Ch.",
  horarios: [
    {
      semana: 1,
      dias: [1],
      bloque: 1,
      salon: "201",
    },
    {
      semana: 1,
      dias: [2],
      bloque: 4,
      salon: "201",
    },
    {
      semana: 1,
      dias: [4],
      bloque: 4,
      salon: "201",
    },
    {
      semana: 2,
      dias: [2],
      bloque: 4,
      salon: "201",
    },
    {
      semana: 2,
      dias: [3],
      bloque: 2,
      salon: "201",
    },
  ],
  class_: "sociales",
};

const artes = {
  nombre: "Artes",
  nombreProfesor: "Andres G.",
  horarios: [
    {
      semana: 2,
      dias: [0],
      bloque: 4,
      salon: "108",
    },
    {
      semana: 2,
      dias: [4],
      bloque: 1,
      salon: "108",
    },
  ],
  class_: "artes",
};

const ingles_tecnico = {
  nombre: "Inglés Técnico",
  nombreProfesor: "Emilce M.",
  horarios: [
    {
      semana: 1,
      dias: [2],
      bloque: 6,
      salon: "99",
    },
    {
      semana: 2,
      dias: [2],
      bloque: 2,
      salon: "99",
    },
  ],
  class_: "ingles_tecnico",
};

const geometria = {
  nombre: "Geometría",
  nombreProfesor: "Nelson R.",
  horarios: [
    {
      semana: 1,
      dias: [4],
      bloque: 6,
      salon: "203",
    },
  ],
  class_: "geometria",
};

const logica_filosofica = {
  nombre: "Lógica Filosófica",
  nombreProfesor: "Edisson.",
  horarios: [
    {
      semana: 1,
      dias: [2],
      bloque: 1,
      salon: "209",
    },
    {
      semana: 1,
      dias: [3],
      bloque: 6,
      salon: "201",
    },
  ],
  class_: "logica_filosofica",
};

const quimica = {
  nombre: "Química",
  nombreProfesor: "Alexandra V.",
  horarios: [
    {
      semana: 1,
      dias: [0],
      bloque: 4,
      salon: "205",
    },
    {
      semana: 1,
      dias: [4],
      bloque: 2,
      salon: "205",
    },
  ],
  class_: "quimica",
};

const laboratorio_ciencias = {
  nombre: "Laboratorio Ciencias",
  nombreProfesor: "Alexandra V.",
  horarios: [
    {
      semana: 1,
      dias: [3],
      bloque: 1,
      salon: "209",
    },
  ],
  class_: "laboratorio_ciencias",
};

const castellano = {
  nombre: "Castellano",
  nombreProfesor: "Sandra F.",
  horarios: [
    {
      semana: 1,
      dias: [1],
      bloque: 6,
      salon: "118",
    },
    {
      semana: 2,
      dias: [0],
      bloque: 1,
      salon: "115",
    },
    {
      semana: 2,
      dias: [1],
      bloque: 6,
      salon: "121",
    },
  ],
  class_: "castellano",
};

const educacion_fisica = {
  nombre: "Educación Física",
  nombreProfesor: "Matha Paola.",
  horarios: [
    {
      semana: 1,
      dias: [0],
      bloque: 1,
      salon: "Patio 3",
    },
    {
      semana: 2,
      dias: [1],
      bloque: 2,
      salon: "Patio 3",
    },
  ],
  class_: "educacion_fisica",
};

const etica_y_religion = {
  nombre: "Ética y Religión",
  nombreProfesor: "Roberto S.",
  horarios: [
    {
      semana: 1,
      dias: [0],
      bloque: 2,
      salon: "204",
    },
    {
      semana: 1,
      dias: [3],
      bloque: 4,
      salon: "204",
    },
  ],
  class_: "etica_y_religion",
};

const laboratorio_ingles = {
  nombre: "Laboratorio Inglés",
  nombreProfesor: "Stefany.",
  horarios: [
    {
      semana: 2,
      dias: [2],
      bloque: 6,
      salon: "112",
    },
  ],
  class_: "laboratorio_ingles",
};

const Materias = [
  descanso,
  ciencias_naturales,
  informatica,
  matematicas,
  logica_matematica,
  laboratorio_lector,
  fisica,
  ingles,
  sociales,
  artes,
  ingles_tecnico,
  geometria,
  logica_filosofica,
  quimica,
  laboratorio_ciencias,
  castellano,
  educacion_fisica,
  etica_y_religion,
  laboratorio_ingles,
];

class CrearElementoHTML {
  constructor(tagName, id, classList, style, innerHTML, title) {
    this.elemento = document.createElement(tagName);
    if (id) this.elemento.id = id;
    if (classList) this.elemento.classList = classList;
    if (style) this.elemento.style = style;
    if (innerHTML) this.elemento.innerHTML = innerHTML;
    if (title) this.elemento.title = title;
  }

  get Element() {
    return this.elemento;
  }
}

(function buildSchedulesHTML() {
  for (let i = 1; i <= 2; i++) {
    buildWeekHTML(i);
  }
})();

function buildWeekHTML(WeekNum) {
  const Week = document.getElementById(`Semana_${WeekNum}`);
  for (let i = 0; i < 5; i++) {
    let day = new CrearElementoHTML("DIV", null, "dia", null, `<h4>${diasShort[i]}</h4>`);
    getSubjectsForDay(WeekNum, i).forEach(({nombre, nombreProfesor, horarios, class_}) => {
      let {inicio, fin} = bloques.find((block) => block.numero == horarios[0].bloque);
      day.Element.innerHTML += `
          <div data-hora="${inicio} - ${fin}" data-profesor="${nombreProfesor}" data-salon="${horarios[0].salon}" class="materia ${class_}">
            <h5>${nombre}</h5>
            <span class="hora">${inicio} - ${fin}</span>
          </div>
        `;
    });
    Week.insertAdjacentElement("beforeend", day.Element);
  }
}

function getSubjectsForDay(week, day) {
  let Subjects = [];
  Materias.forEach((Subject) => {
    Subject.horarios.forEach((horary) => {
      if (horary.semana === week && horary.dias.includes(day)) {
        let temSubject = {...Subject, horarios: [horary]}; //Utilizamos esta asignación para crear una copia del objeto y no una nueva referencia a el
        temSubject.horarios = [horary];
        Subjects.push(temSubject);
      }
    });
  });
  Subjects.sort((a, b) => a.horarios[0].bloque - b.horarios[0].bloque);
  return Subjects;
}
