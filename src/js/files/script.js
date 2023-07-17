// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

// Валидатор для inpup tel
document.addEventListener('DOMContentLoaded', function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = '+7(___) ___-__-__',
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = e.target.value.replace(/\D/g, '');
    if (clearVal !== 'false' && e.type === 'blur') {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = '';
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
  };
  var phoneInputs = document.querySelectorAll('.form-field__input--phone');
  for (let elem of phoneInputs) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, eventCalllback);
    }
  }

  var phoneInp = document.querySelectorAll('.form-request__input--phone');
  for (let elem of phoneInp) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});

// Удаление класса при определенной ширине для табов
(function () {
  let clientWidth = document.documentElement.clientWidth;
  let tabClass = document.querySelectorAll('.works-tabs__title');

  if (clientWidth < 716) {
    tabClass.forEach((el) => {
      el.classList.remove('_tab-active');
    });
  }

  // if (tabClass) {
  //   tabClass.forEach((el) => {
  //     el.addEventListener('click', () => {
  //       el.classList.remove('_tab-active');
  //     });
  //   });
  // }
})();

// Video

function videoPlay() {
  if (document.querySelector('.video-block')) {
    let videoBlock = document.querySelector('.video-block');
    const video = videoBlock.querySelector('.video-block__content');
    let playBtn = videoBlock.querySelector('.video-block__play');

    playBtn.addEventListener('click', () => {
      videoBlock.classList.add('played');
      video.play();

      video.controls = true;
      playBtn.classList.add('played');
    });

    video.onpause = function () {
      if (video.paused) {
        videoBlock.classList.remove('played');
        video.controls = false;
        playBtn.classList.remove('played');
      }
    };
  } else {
    return false;
  }
}

videoPlay();

function btnTop() {
  window.addEventListener('scroll', () => {
    let btnUp = document.querySelector('.button-up');
    let y = window.scrollY;
    let homeHeight = document.querySelector('.home').offsetHeight;

    if (y >= homeHeight) {
      btnUp.classList.add('button-up-active');
    } else {
      btnUp.classList.remove('button-up-active');
    }
  });
}

btnTop();
