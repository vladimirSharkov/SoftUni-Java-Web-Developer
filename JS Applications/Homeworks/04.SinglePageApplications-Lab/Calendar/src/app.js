const yearSec = document.getElementById('years');

const years = [...document.querySelectorAll('.monthCalendar')].reduce((acc, c) => {
    acc[c.id] = c
    return acc
}, {});

const months = [...document.querySelectorAll('.daysCalendar')].reduce((acc, c) => {
    acc[c.id] = c
    return acc
}, {});

const monthNames = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sebt: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
}

function displaySection(section) {
    document.body.innerHTML = '';
    document.body.appendChild(section);
}

displaySection(yearSec)

yearSec.addEventListener('click', (event) => {
    if (event.target.classList.contains('day') || event.target.classList.contains('date')) {
        event.stopImmediatePropagation();
        const yearId = event.target.textContent.trim();
        displaySection(years[`year-${yearId}`])
    }

});


document.body.addEventListener('click', (event) => {
    if (event.target.tagName === 'CAPTION') {
        const parentNode = event.target.parentNode.parentNode;
        if (parentNode.id.includes('year-')) {
            displaySection(yearSec)
        }else if (parentNode.id.includes('month')) {
            const yearId = parentNode.id.split('-')[1];
            displaySection(years[`year-${yearId}`])
        }
    } else if (event.target.tagName === 'TD' || event.target.tagName === 'DIV') {
        const monthName = event.target.textContent.trim();
        if (monthNames.hasOwnProperty(monthName)) {
            let parent = event.target.parentNode;
            while (parent.tagName !== 'TABLE') {
                parent = parent.parentNode;
            }
            const year = parent.querySelector('caption').textContent.trim();
            const monthId = monthNames[monthName];
            const month = `month-${year}-${monthId}`;
            displaySection(months[month])
        }
    }
});
