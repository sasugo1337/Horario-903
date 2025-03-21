const dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
const bloques = [
  {numero: 1, inicio: '6:30', fin: '8:20'},
  {numero: 2, inicio: '8:20', fin: '10:10'},
  {numero: 3, inicio: '10:10', fin: '10:40'},
  {numero: 4, inicio: '10:40', fin: '12:10'},
  {numero: 5, inicio: '12:10', fin: '12:40'},
  {numero: 6, inicio: '12:40', fin: '14:20'},
];

const descanso = {
  nombre: 'Descanso',
  nombreProfesor: null,
  horarios: [
    {semana: 1, dias: [1, 2, 3, 4, 5], bloque: 3, salon: null},
    {semana: 1, dias: [1, 2, 3, 4, 5], bloque: 5, salon: null},
    {semana: 2, dias: [1, 2, 3, 4, 5], bloque: 3, salon: null},
    {semana: 2, dias: [1, 2, 3, 4, 5], bloque: 5, salon: null},
  ],
  class: 'descanso',
};

const ciencias_naturales = {
  nombre: 'Ciencias Narurales',
  nombreProfesor: 'Hammes.',
  horarios: [
    {
      semana: 1,
      dias: [1],
      bloque: 2,
      salon: '206',
    },
    {
      semana: 2,
      dias: [1],
      bloque: 4,
      salon: '100',
    },
    {
      semana: 2,
      dias: [2],
      bloque: 1,
      salon: '109',
    },
    {
      semana: 2,
      dias: [3],
      bloque: 5,
      salon: '100',
    },
  ],
  class: 'ciencias_naturales',
};

const informatica = {
  nombre: 'Informatica',
  nombreProfesor: 'Jhon Fredy.',
  horarios: [
    {
      semana: 2,
      dias: [1],
      bloque: 1,
      salon: '119',
    },
    {
      semana: 2,
      dias: [4],
      bloque: 4,
      salon: '119',
    },
  ],
  class: 'informatica',
};

const matematicas = {
  nombre: 'Matemáticas',
  nombreProfesor: 'Donaldo F.',
  horarios: [
    {
      semana: 1,
      dias: [3],
      bloque: 2,
      salon: '203',
    },
    {
      semana: 2,
      dias: [0],
      bloque: 6,
      salon: '203',
    },
    {
      semana: 2,
      dias: [3],
      bloque: 1,
      salon: '203',
    },
    {
      semana: 2,
      dias: [4],
      bloque: 2,
      salon: '203',
    },
  ],
  class: 'matematicas',
};

const logica_matematica = {
  nombre: 'Lógica Matemática',
  nombreProfesor: 'Jhon Jairo.',
  horarios: [
    {
      semana: 1,
      dias: [0],
      bloque: 6,
      salon: '211',
    },
    {
      semana: 2,
      dias: [3],
      bloque: 6,
      salon: '204',
    },
  ],
  class: 'logica_matematica',
};

const laboratorio_lector = {
  nombre: 'Lógica Matemática',
  nombreProfesor: 'Yadira S.',
  horarios: [
    {
      semana: 1,
      dias: [2],
      bloque: 2,
      salon: '114',
    },
  ],
  class: 'laboratorio_lector',
};

const fisica = {
  nombre: 'Física',
  nombreProfesor: 'Alix M.',
  horarios: [
    {
      semana: 1,
      dias: [4],
      bloque: 1,
      salon: '210',
    },
    {
      semana: 2,
      dias: [0],
      bloque: 2,
      salon: '205',
    },
  ],
  class: 'fisica',
};

const ingles = {
  nombre: 'Inglés',
  nombreProfesor: 'Stefany.',
  horarios: [
    {
      semana: 1,
      dias: [1],
      bloque: 4,
      salon: '202',
    },
    {
      semana: 2,
      dias: [4],
      bloque: 6,
      salon: '202',
    },
  ],
  class: 'ingles',
};

const sociales = {
  nombre: 'Sociales',
  nombreProfesor: 'Sandra Ch.',
  horarios: [
    {
      semana: 1,
      dias: [1],
      bloque: 1,
      salon: '201',
    },
    {
      semana: 1,
      dias: [2],
      bloque: 4,
      salon: '201',
    },
    {
      semana: 1,
      dias: [4],
      bloque: 4,
      salon: '201',
    },
    {
      semana: 2,
      dias: [2],
      bloque: 4,
      salon: '201',
    },
    {
      semana: 2,
      dias: [3],
      bloque: 2,
      salon: '201',
    },
  ],
  class: 'sociales',
};

const artes = {
  nombre: 'Artes',
  nombreProfesor: 'Andres G.',
  horarios: [
    {
      semana: 2,
      dias: [0],
      bloque: 4,
      salon: '108',
    },
    {
      semana: 2,
      dias: [4],
      bloque: 1,
      salon: '108',
    },
  ],
  class: 'artes',
};

const ingles_tecnico = {
  nombre: 'Inglés Técnico',
  nombreProfesor: 'Emilce M.',
  horarios: [
    {
      semana: 1,
      dias: [2],
      bloque: 6,
      salon: '99',
    },
    {
      semana: 2,
      dias: [2],
      bloque: 2,
      salon: '99',
    },
  ],
  class: 'ingles_tecnico',
};

const geometria = {
  nombre: 'Geometría',
  nombreProfesor: 'Nelson R.',
  horarios: [
    {
      semana: 1,
      dias: [4],
      bloque: 6,
      salon: '203',
    },
  ],
  class: 'geometria',
};

const logica_filosofica = {
  nombre: 'Lógica Filosófica',
  nombreProfesor: 'Edisson.',
  horarios: [
    {
      semana: 1,
      dias: [2],
      bloque: 1,
      salon: '209',
    },
    {
      semana: 1,
      dias: [3],
      bloque: 6,
      salon: '201',
    },
  ],
  class: 'logica_filosofica',
};

const quimica = {
  nombre: 'Química',
  nombreProfesor: 'Alexandra V.',
  horarios: [
    {
      semana: 1,
      dias: [0],
      bloque: 4,
      salon: '205',
    },
    {
      semana: 1,
      dias: [4],
      bloque: 2,
      salon: '205',
    },
  ],
  class: 'quimica',
};

const laboratorio_ciencias = {
  nombre: 'Laboratorio Ciencias',
  nombreProfesor: 'Alexandra V.',
  horarios: [
    {
      semana: 1,
      dias: [3],
      bloque: 1,
      salon: '209',
    },
  ],
  class: 'laboratorio_ciencias',
};

const castellano = {
  nombre: 'Castellano',
  nombreProfesor: 'Sandra F.',
  horarios: [
    {
      semana: 1,
      dias: [1],
      bloque: 6,
      salon: '118',
    },
    {
      semana: 2,
      dias: [0],
      bloque: 1,
      salon: '115',
    },
    {
      semana: 2,
      dias: [1],
      bloque: 6,
      salon: '121',
    },
  ],
  class: 'castellano',
};

const educacion_fisica = {
  nombre: 'Educación Física',
  nombreProfesor: 'Matha Paola.',
  horarios: [
    {
      semana: 1,
      dias: [0],
      bloque: 1,
      salon: 'Patio 3',
    },
    {
      semana: 2,
      dias: [1],
      bloque: 2,
      salon: 'Patio 3',
    },
  ],
  class: 'educacion_fisica',
};

const etica_y_religion = {
  nombre: 'Ética y Religión',
  nombreProfesor: 'Roberto S.',
  horarios: [
    {
      semana: 1,
      dias: [0],
      bloque: 2,
      salon: '204',
    },
    {
      semana: 1,
      dias: [3],
      bloque: 4,
      salon: '204',
    },
  ],
  class: 'etica_y_religion',
};

const laboratorio_ingles = {
  nombre: 'Laboratorio Inglés',
  nombreProfesor: 'Stefany.',
  horarios: [
    {
      semana: 2,
      dias: [2],
      bloque: 6,
      salon: '112',
    },
  ],
  class: 'laboratorio_ingles',
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

console.log(Materias);
