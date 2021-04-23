import '../scss/style.scss';
import { initTamplate, dateCalcTemp, timerTemp } from './template.js';
import initDateCalc from "./initDateCalc.js";
import initTimer from "./initTimer.js";

initDateCalc();

const btnDateCalc = document.querySelector('.btn__date'),
      btnTimer = document.querySelector('.btn__timer');


btnDateCalc.addEventListener('click', () => {
    initTamplate(dateCalcTemp, '#datecalc');
    initDateCalc();
});

btnTimer.addEventListener('click', () => {
    initTamplate(timerTemp, '#datecalc');
    initTimer();
});