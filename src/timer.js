import { textError } from './message.js';

// Setup the new Howl.
const sound = new Howl({
  src: ['./src/sound/timer.mp3']
});

export default function timer(time, button) {

    const dateCalcResult = document.getElementById("datecalc__result");
    let timeInterval;

    button.addEventListener('click', (event) => {
        dateCalcResult.innerHTML = '';
        // Отменяем действие по умолчанию
        event.preventDefault();
        
        if(event.target.innerText == 'Старт') {
            // Если время на таёмере не установлнено таймер не запускается
            if (!time.valueAsNumber) {
                dateCalcResult.innerHTML = textError('Задайте время для таймера');
                return;
            }
            // При запуске таймера меняем надпись на кнопке и запускаем таймер
            event.target.innerText = 'Пауза';
            timeInterval = setInterval(() => {
                if (time.valueAsNumber) {
                    time.valueAsNumber -= 1000;
                    if (!time.valueAsNumber) {
                        button.innerText = 'Старт';
                        sound.play();
                        clearInterval(timeInterval);
                    }
                } 
            }, 1000);
        } else {
            // При нажатии на 'Паузу' возвращаем надпись 'Старт' и останавливаем таймер  
            event.target.innerText = 'Старт';
            clearInterval(timeInterval);
        }
    });
}