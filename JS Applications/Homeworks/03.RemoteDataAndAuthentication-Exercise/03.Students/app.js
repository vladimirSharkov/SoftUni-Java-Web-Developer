function attachEvents() {

     window.addEventListener('load', getStudents);

    document.getElementById('creatForm').addEventListener('submit',(event)=>{
        event.preventDefault();
        console.log(event.target.parentNode)
        const formData = new FormData(event.target);
        const student={
            firstName:formData.get('firstName'),
            lastName:formData.get('lastName'),
            facultyNumber:formData.get('facultyNumber'),
            grade:formData.get('grade')
        }
        postStudent(student);
        document.querySelector('#results').innerHTML='';
        getStudents();
        event.target.reset()
    })
}



attachEvents()



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

async function getStudents() {
    const students = await request('http://localhost:3030/jsonstore/collections/students');

    const tbody = document.createElement('tbody');
    Object.values(students).map(s => {
        const tr = document.createElement('tr');
        const tdFirstName = document.createElement('td');
        tdFirstName.textContent = s.firstName;
        const tdLastName = document.createElement('td');
        tdLastName.textContent = s.lastName;
        const tdNumber = document.createElement('td');
        tdNumber.textContent = s.facultyNumber
        const tdGrade = document.createElement('td');
        tdGrade.textContent = s.grade;

        tr.appendChild(tdFirstName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdNumber)
        tr.appendChild(tdGrade)

        tbody.appendChild(tr);
        document.getElementById('results').appendChild(tbody);
    })
}

async function postStudent(student) {
    const result = await request('http://localhost:3030/jsonstore/collections/students', {
        method: 'post',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify(student)
    })
}