function attachEvents() {
    document.querySelector('button[class="load"]').addEventListener('click', getAllCatcher);
    document.querySelector('button[class="add"]').addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const catches = {
            angler: formData.get('angler'),
            weight: formData.get('weight'),
            species: formData.get('species'),
            location: formData.get('location'),
            bait: formData.get('bait'),
            captureTime: formData.get('captureTime ')
        }
        postCatcher(catches);
        getAllCatcher();
        event.target.reset();
    })

}

attachEvents();

async function request(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }
    const data = await response.json();
    return data;
}

async function getAllCatcher() {
    const result = await request('http://localhost:3030/data/catches');


    document.getElementById('catches').innerHTML = ''
    Object.values(result).map(c => {
        const div = document.createElement('div');
        div.className = 'catch';

        const anglerLabel = document.createElement('label');
        anglerLabel.textContent = 'Angler';

        const anglerInput = document.createElement('input');
        anglerInput.setAttribute('type', 'text');
        anglerInput.className = 'angler';
        anglerInput.value = c.angler;

        const weightLabel = document.createElement('weight');
        weightLabel.textContent = 'Weight';

        const weightInput = document.createElement('input');
        weightInput.setAttribute('type', 'text');
        weightInput.className = 'weight';
        weightInput.value = c.weight;

        const speciesLabel = document.createElement('species');
        speciesLabel.textContent = 'Species';

        const speciesInput = document.createElement('input');
        speciesInput.setAttribute('type', 'text');
        speciesInput.className = 'species';
        speciesInput.value = c.species;

        const locationLabel = document.createElement('location');
        locationLabel.textContent = 'Location';

        const locationInput = document.createElement('input');
        locationInput.setAttribute('type', 'text');
        locationInput.className = 'location';
        locationInput.value = c.location;

        const baitLabel = document.createElement('location');
        baitLabel.textContent = 'Bait';

        const baitInput = document.createElement('input');
        baitInput.setAttribute('type', 'text');
        baitInput.className = 'bait';
        baitInput.value = c.bait;

        const captureLabel = document.createElement('location');
        captureLabel.textContent = 'Capture';

        const captureInput = document.createElement('input');
        captureInput.setAttribute('type', 'text');
        captureInput.className = 'captureTime';
        captureInput.value = c.captureTime;

        const updateBtn = document.createElement('button');
        updateBtn.setAttribute('disabled', '');
        updateBtn.className = 'update'
        updateBtn.textContent = 'Update';

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('disabled', '');
        deleteBtn.className = 'delete'
        deleteBtn.textContent = 'Delete'

        const hr1 = document.createElement('hr');
        const hr2 = document.createElement('hr');
        const hr3 = document.createElement('hr');
        const hr4 = document.createElement('hr');
        const hr5 = document.createElement('hr');
        const hr6 = document.createElement('hr');

        div.appendChild(anglerLabel)
        div.appendChild(anglerInput)
        div.appendChild(hr1)
        div.appendChild(weightLabel)
        div.appendChild(weightInput)
        div.appendChild(hr2)
        div.appendChild(speciesLabel)
        div.appendChild(speciesInput)
        div.appendChild(hr3)
        div.appendChild(locationLabel)
        div.appendChild(locationInput)
        div.appendChild(hr4)
        div.appendChild(baitLabel)
        div.appendChild(baitInput)
        div.appendChild(hr5)
        div.appendChild(captureLabel)
        div.appendChild(captureInput)
        div.appendChild(hr6)
        div.appendChild(updateBtn)
        div.appendChild(deleteBtn)

        document.getElementById('catches').appendChild(div)
    });
}

async function postCatcher(catches) {
    const result = await request('http://localhost:3030/data/catches', {
        method: 'post',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify(catches)
    })

}