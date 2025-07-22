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

const dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
const diasShort = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const bloques = [
  { numero: 1, inicio: '6:30 am', fin: '8:20 am' },
  { numero: 2, inicio: '8:20 am', fin: '10:10 am' },
  { numero: 3, inicio: '10:10 am', fin: '10:40 am' },
  { numero: 4, inicio: '10:40 am', fin: '12:10 pm' },
  { numero: 5, inicio: '12:10 pm', fin: '12:40 pm' },
  { numero: 6, inicio: '12:40 pm', fin: '2:20 pm' },
];

const _dias = [
  {
    id_dia: 1,
    nombre: 'lunes',
    abreviatura: 'L',
    materias: [
      { id_materia: 17, salon: '205' },
      { id_materia: 3, salon: '107' },
      { id_materia: 0, salon: null },
      { id_materia: 16, salon: '203' },
      { id_materia: 0, salon: null },
      { id_materia: 12, salon: 'Lab Inglés' },
    ],
  },
  {
    id_dia: 2,
    nombre: 'martes',
    abreviatura: 'M',
    materias: [
      { id_materia: 18, salon: '201' },
      { id_materia: 3, salon: '206' },
      { id_materia: 0, salon: null },
      { id_materia: 4, salon: 'Patio 3' },
      { id_materia: 0, salon: null },
      { id_materia: 2, salon: '114' },
    ],
  },
  {
    id_dia: 3,
    nombre: 'miércoles',
    abreviatura: 'M',
    materias: [
      { id_materia: 6, salon: 'Lab Física' },
      { id_materia: 5, salon: '204' },
      { id_materia: 0, salon: null },
      { id_materia: 14, salon: '207' },
      { id_materia: 0, salon: null },
      { id_materia: 15, salon: '207' },
    ],
  },
  {
    id_dia: 4,
    nombre: 'jueves',
    abreviatura: 'J',
    materias: [
      { id_materia: 14, salon: '205' },
      { id_materia: 18, salon: '201' },
      { id_materia: 0, salon: null },
      { id_materia: 2, salon: '104' },
      { id_materia: 0, salon: null },
      { id_materia: 8, salon: '202' },
    ],
  },
  {
    id_dia: 5,
    nombre: 'viernes',
    abreviatura: 'V',
    materias: [
      { id_materia: 9, salon: '99' },
      { id_materia: 10, salon: '119' },
      { id_materia: 0, salon: null },
      { id_materia: 1, salon: '108' },
      { id_materia: 0, salon: null },
      { id_materia: 3, salon: '210' },
    ],
  },
  {
    id_dia: 6,
    nombre: 'lunes',
    abreviatura: 'L',
    materias: [
      { id_materia: 5, salon: '204' },
      { id_materia: 16, salon: '203' },
      { id_materia: 0, salon: null },
      { id_materia: 17, salon: '205' },
      { id_materia: 0, salon: null },
      { id_materia: 15, salon: '202' },
    ],
  },
  {
    id_dia: 7,
    nombre: 'martes',
    abreviatura: 'M',
    materias: [
      { id_materia: 18, salon: '201' },
      { id_materia: 10, salon: '119' },
      { id_materia: 0, salon: null },
      { id_materia: 16, salon: '203' },
      { id_materia: 0, salon: null },
      { id_materia: 2, salon: '115' },
    ],
  },
  {
    id_dia: 8,
    nombre: 'miércoles',
    abreviatura: 'M',
    materias: [
      { id_materia: 6, salon: 'Lab Física' },
      { id_materia: 3, salon: '114' },
      { id_materia: 0, salon: null },
      { id_materia: 16, salon: '203' },
      { id_materia: 0, salon: null },
      { id_materia: 4, salon: 'Patio 3' },
    ],
  },
  {
    id_dia: 9,
    nombre: 'jueves',
    abreviatura: 'J',
    materias: [
      { id_materia: 1, salon: '108' },
      { id_materia: 9, salon: '99' },
      { id_materia: 0, salon: null },
      { id_materia: 18, salon: '201' },
      { id_materia: 0, salon: null },
      { id_materia: 8, salon: '202' },
    ],
  },
  {
    id_dia: 10,
    nombre: 'vieres',
    abreviatura: 'V',
    materias: [
      { id_materia: 11, salon: '115' },
      { id_materia: 13, salon: '114' },
      { id_materia: 0, salon: null },
      { id_materia: 18, salon: '201' },
      { id_materia: 0, salon: null },
      { id_materia: 7, salon: '205' },
    ],
  },
];

const _materias = [
  {
    id_materia: 0,
    nombre: 'Descanso',
    nombreProfesor: null,
    class_: 'descanso',
  },
  {
    id_materia: 1,
    nombre: 'Artes',
    nombreProfesor: 'Andres G.',
    class_: 'artes',
  },
  {
    id_materia: 2,
    nombre: 'Castellano',
    nombreProfesor: 'Sandra F.',
    class_: 'castellano',
  },
  {
    id_materia: 3,
    nombre: 'Ciencias Narurales',
    nombreProfesor: 'Hammes.',
    class_: 'ciencias_naturales',
  },
  {
    id_materia: 4,
    nombre: 'Educación Física',
    nombreProfesor: 'Matha Paola.',
    class_: 'educacion_fisica',
  },
  {
    id_materia: 5,
    nombre: 'Ética y Religión',
    nombreProfesor: 'Roberto S.',
    class_: 'etica_y_religion',
  },
  {
    id_materia: 6,
    nombre: 'Física',
    nombreProfesor: 'Alix M.',
    class_: 'fisica',
  },
  {
    id_materia: 7,
    nombre: 'Geometría',
    nombreProfesor: 'Nelson R.',
    class_: 'geometria',
  },
  {
    id_materia: 8,
    nombre: 'Inglés',
    nombreProfesor: 'Stefany.',
    class_: 'ingles',
  },
  {
    id_materia: 9,
    nombre: 'Inglés Técnico',
    nombreProfesor: 'Emilce M.',
    class_: 'ingles_tecnico',
  },
  {
    id_materia: 10,
    nombre: 'Informatica',
    nombreProfesor: 'Jhon Fredy.',
    class_: 'informatica',
  },
  {
    id_materia: 11,
    nombre: 'Laboratorio Ciencias',
    nombreProfesor: 'Alexandra V.',
    class_: 'laboratorio_ciencias',
  },
  {
    id_materia: 12,
    nombre: 'Laboratorio Inglés',
    nombreProfesor: 'Stefany.',
    class_: 'laboratorio_ingles',
  },
  {
    id_materia: 13,
    nombre: 'Laboratorio lector',
    nombreProfesor: 'Yadira S.',
    class_: 'laboratorio_lector',
  },
  {
    id_materia: 14,
    nombre: 'Lógica Filosófica',
    nombreProfesor: 'Edisson.',
    class_: 'logica_filosofica',
  },
  {
    id_materia: 15,
    nombre: 'Lógica Matemática',
    nombreProfesor: 'Jhon Jairo.',
    class_: 'logica_matematica',
  },
  {
    id_materia: 16,
    nombre: 'Matemáticas',
    nombreProfesor: 'Donaldo F.',
    class_: 'matematicas',
  },
  {
    id_materia: 17,
    nombre: 'Química',
    nombreProfesor: 'Alexandra V.',
    class_: 'quimica',
  },
  {
    id_materia: 18,
    nombre: 'Sociales',
    nombreProfesor: 'Sandra Ch.',
    class_: 'sociales',
  },
];

(function buildSchedulesHTML() {
  for (let i = 0; i <= 1; i++) {
    buildWeekHTML(i);
  }
})();

function buildWeekHTML(WeekNum) {
  let week = document.getElementById(`Semana_${WeekNum + 1}`);
  for (let i = 1; i <= 5; i++) {
    week.insertAdjacentElement('beforeend', buildDay(5 * WeekNum + i));
  }
}

function buildDay(dayNum) {
  let dia = _dias.find((dia) => dia.id_dia == dayNum); //dia
  let dayHtml = new CrearElementoHTML('DIV', null, 'dia', null, `<h4>${dia.abreviatura}</h4>`);
  dia.materias.forEach(({ id_materia, salon }, indice) => {
    let { inicio, fin } = bloques[indice];
    let { nombre, nombreProfesor, class_ } = _materias.find((materia) => materia.id_materia == id_materia);
    dayHtml.Element.innerHTML += `
      <div data-hora="${inicio} - ${fin}" data-profesor="${nombreProfesor}" data-salon="${salon}" class="${class_ != 'descanso' ? 'materia' : ''} ${class_}">
        <h5>${nombre}</h5>
        <span class="hora">${inicio} - ${fin}</span>
      </div>
    `;
  });
  return dayHtml.Element;
}
