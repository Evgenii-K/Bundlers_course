function initTamplate (tamplate, placeToRender) {
    let renderPlace = document.querySelector(placeToRender);
    renderPlace.innerHTML = '';
    renderPlace.innerHTML = tamplate;
}

const dateCalcTemp = `    
    <h3>Калькулятор дат</h3>
    <label>
        <strong>Первая дата:</strong>
        <input type="date" name="firstDate" />
    </label>
    <label>
        <strong>Вторая дата:</strong>
        <input type="date" name="secondDate" />
    </label>
    <button type="submit">Расчитать промежуток</button>
    <p id="datecalc__result"></p>
`;

const timerTemp = `
    <h3>Таймер</h3>
    <label>
        <strong>Установите время таймера:</strong>
        <input type="time" id="setTime" value="00:00" step="1000"/>
    </label>
    <button id="start">Старт</button>
    <button id="clear">Сброс</button>
    <p id="datecalc__result"></p>
`;

export { initTamplate, dateCalcTemp, timerTemp };