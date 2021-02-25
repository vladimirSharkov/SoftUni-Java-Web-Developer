function attachEventsListeners() {
    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMinutes = document.getElementById('minutes');
    let inputSeconds = document.getElementById('seconds');
    document.getElementById('daysBtn').addEventListener('click', onClickDay);
    document.getElementById('hoursBtn').addEventListener('click', onClickHours);
    document.getElementById('minutesBtn').addEventListener('click', onClickMin);
    document.getElementById('secondsBtn').addEventListener('click', onClickSec);

    function onClickDay(e) {
        let dayInSec = Number(inputDays.value) * 86400;
        inputSeconds.value = dayInSec;
        inputMinutes.value = dayInSec / 60;
        inputHours.value = dayInSec / 60 / 60;
    }

    function onClickHours() {
        let hoursInSec = Number(inputHours.value) * 3600;
        inputSeconds.value = hoursInSec;
        inputMinutes.value = hoursInSec / 60;
        inputDays.value = hoursInSec / 86400;
    }

    function onClickMin() {
        let minutesInSec = Number(inputMinutes.value) * 60;
        inputSeconds.value = minutesInSec;
        inputHours.value = minutesInSec / 3600;
        inputDays.value = (minutesInSec / 86400);
    }

    function onClickSec() {
        inputMinutes.value = Number(inputSeconds.value) / 60;
        inputDays.value = Number(inputSeconds.value) / 86400;
        inputHours.value = Number(inputSeconds.value) / 3600;
    }
}