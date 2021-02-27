function attachEvents() {
    const input = document.getElementById('location');
    const btn = document.getElementById('submit');
    const url = 'http://localhost:3030/jsonstore/forecaster/locations'
    const div = document.getElementById('forecast');
    const divParent = document.getElementById('current');

    btn.addEventListener('click', getWeather);

     const conditionMap = {
         'Sunny': '☀',
         'Partly sunny':'⛅',
         'Overcast':'☁',
         'Rain':'☂',
         'Degrees':'°'
     }

    async function getWeather() {
        const code = await getCode();
        let [current,upcoming] =await Promise.all([
            getCurrent(),
            getForecast()
        ]);

        div.style.display = 'block';
        const forecastsDiv= document.createElement('div');
        forecastsDiv.className = 'forecasts';

        const spanSymbol = document.createElement('span');
        spanSymbol.className = 'condition symbol';
        spanSymbol.textContent = conditionMap[current.forecast.condition];



        const spanCondition = document.createElement('span');
        spanCondition.className = 'condition';

        const spanName  = document.createElement('span');
        spanName.className = 'forecast-date';
        spanName.textContent = current.name;

        const spanTemp = document.createElement('span');
        spanTemp.className = 'forecast-date';
        spanTemp.textContent = `${current.forecast.low}${conditionMap['Degrees']}/${current.forecast.high}${conditionMap['Degrees']}`;

        const spanDate = document.createElement('span');
        spanDate.className = 'forecast-date';
        spanDate.textContent = current.forecast.condition;


        spanCondition.appendChild(spanName)
        spanCondition.appendChild(spanTemp)
        spanCondition.appendChild(spanDate)

        forecastsDiv.appendChild(spanSymbol);
        forecastsDiv.appendChild(spanCondition)

        divParent.appendChild(forecastsDiv)


    }

    async function getCode() {
        const response = await fetch(url);
        const date = await response.json();
        let find = date.find(x => x.name.toLowerCase() === input.value.toLowerCase()).code;

        return find;
    }

    async function getCurrent() {
        const code = await getCode();
        const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
        const response = await fetch(url);
        const date = await response.json();

        return date;
    }

    async function getForecast() {
        const code = await getCode();
        const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
        const response = await fetch(url);
        const date = await response.json();

        return date;
    }



}

attachEvents();