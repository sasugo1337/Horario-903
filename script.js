[...document.getElementsByClassName('materia')].forEach((element) => {
  element.addEventListener('click', MostrarInfoMateria);
});

function MostrarInfoMateria(event) {
  let Objetivo = event.target;
  while (!Objetivo.classList.contains('materia')) {
    Objetivo = Objetivo.parentElement;
  }
  console.log();
  new _InfoMareria(Objetivo, Objetivo.getAttribute('data-profesor'), Objetivo.getAttribute('data-salon'), Objetivo.getAttribute('data-hora'));
}

class _Background {
  Element;
  constructor() {
    this.construirBackground();
  }

  construirBackground() {
    this.Element = document.createElement('div');
    this.Element.classList.add('background');
    this.insertarBackground();
    this.Element.addEventListener('click', () => {
      this.retirarBackground();
    });
  }

  insertarBackground() {
    let main = document.getElementById('main');
    main.insertAdjacentElement('beforeend', this.Element);
    this.Element.style.width = `${main.clientWidth}px`;
    this.Element.style.height = `${main.clientHeight}px`;
  }

  retirarBackground() {
    this.Element.remove();
  }

  getElement() {
    return this.Element;
  }
}

class _InfoMareria {
  Element;
  constructor(Padre, profesor, salon, hora) {
    this.Padre = Padre;
    this.profesor = profesor;
    this.salon = salon;
    this.hora = hora;
    this.construirInfoMateria();
  }

  construirInfoMateria() {
    this.Element = document.createElement('div');
    let Background = new _Background().getElement();
    this.Element.classList.add('infoMateria');
    let Profesor = document.createElement('div');
    Profesor.innerHTML = this.profesor;
    let Salon = document.createElement('div');
    Salon.innerHTML = `Salon ${this.salon}`;
    let Hora = document.createElement('div');
    Hora.innerHTML = this.hora;
    this.Element.insertAdjacentElement('beforeend', Profesor);
    this.Element.insertAdjacentElement('beforeend', Salon);
    this.Element.insertAdjacentElement('beforeend', Hora);
    Background.insertAdjacentElement('beforeend', this.Element);
    this.ObtenerDatosPadre();
    this.PosicionarElemento();
  }

  ObtenerDatosPadre() {
    this.xposPadre = this.Padre.getBoundingClientRect().left;
    this.yposPadre = this.Padre.getBoundingClientRect().top + window.scrollY;
    this.widthPadre = this.Padre.clientWidth;
    this.heightPadre = this.Padre.clientHeight;
    this.horientacion = this.widthPadre > this.heightPadre ? 'horizontal' : 'vertical';
  }

  PosicionarElemento() {
    let separacion = 8;
    if (this.horientacion == 'horizontal') {
      let AnchoElemento = this.widthPadre * 0.9;
      this.Element.style.width = `${AnchoElemento}px`;
      this.Element.style.left = `${this.xposPadre + this.widthPadre * 0.05}px`;

      if (this.yposPadre + this.heightPadre * 2 + 10 < window.innerHeight + window.scrollY) {
        this.Element.style.top = `${this.yposPadre + this.heightPadre + separacion}px`;
      } else {
        this.Element.style.top = `${this.yposPadre - this.Element.clientHeight - separacion}px`;
      }
    } else {
      let altoElemento = this.heightPadre * 0.9;
      // this.Element.style.height = `${altoElemento}px`;
      this.Element.style.maxWidth = `min-content`;
      this.Element.style.top = `${this.yposPadre + this.heightPadre * 0.05}px`;

      if (this.xposPadre + this.widthPadre * 2 + 10 < window.innerWidth + window.scrollX) {
        this.Element.style.left = `${this.xposPadre + this.widthPadre + separacion}px`;
      } else {
        this.Element.style.left = `${this.xposPadre - this.widthPadre - separacion}px`;
      }
    }
  }
}
