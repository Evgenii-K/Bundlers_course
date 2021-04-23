import timer from './timer.js';

export default function initTimer () {

    if (document.querySelector('#setTime')) {
        const setTime = document.querySelector('#setTime');
        
        const btnStart = document.querySelector('#start'),
              btnClear = document.querySelector('#clear');

        btnClear.addEventListener('click', (event) => {
            event.preventDefault();
            setTime.valueAsNumber = 0;
        });

        timer(setTime, btnStart);
    
    }
}



