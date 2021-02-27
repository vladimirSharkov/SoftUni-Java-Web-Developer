async function getInfo() {
    const input = document.getElementById('stopId');
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + input.value;
    const ul = document.getElementById('buses')

    try {
        const response = await fetch(url);
        const date = await response.json();
        document.getElementById('stopName').textContent = date.name
        ul.textContent = ''
        Object.entries(date.buses)
            .map(([bus, time]) => {
                const result = document.createElement('li');
                result.textContent = `Bus ${bus} arrives in ${time}`
                ul.appendChild(result)
            });

        input.value = '';
    }catch (error){
        document.getElementById('stopName').textContent = 'Error';
    }
}
