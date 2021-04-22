import { diffDates, diffToHtml } from "./datecalc.js";
import { textError } from "./message.js";

export default function initDateCalc () {
    const dateCalcForm = document.getElementById("datecalc"),
        dateCalcResult = document.getElementById("datecalc__result");
    
    dateCalcForm.addEventListener("submit", handleCalcDates);
    
    function handleCalcDates(event) {
        
        dateCalcResult.innerHTML = "";
        event.preventDefault();
    
        let { firstDate, secondDate } = event.target.elements;
        firstDate = firstDate.value; 
        secondDate = secondDate.value;

        if (firstDate > secondDate) {
            [firstDate, secondDate] = [secondDate, firstDate];
        }
    
        if (firstDate && secondDate) {
            const diff = diffDates(firstDate, secondDate);
            dateCalcResult.innerHTML = diffToHtml(diff);
        }
        else {
            dateCalcResult.innerHTML = textError("Для расчёта введите обе даты!");
        }
    }
}


