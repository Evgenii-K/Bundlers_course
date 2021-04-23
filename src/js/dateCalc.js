import { DateTime } from 'luxon';

export  function diffDates (firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

export const diffToHtml = diff => `
    <span>
        ${diff.years ? diff.years + ' лет' : ''} 
        ${diff.months ? diff.months + ' месяцев' : ''} 
        ${diff.days ? diff.days + ' дней' : ''}
    </span>
`;