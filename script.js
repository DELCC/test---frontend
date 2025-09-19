fetch('http://localhost:3000/year')
.then(response => response.json())
.then(data => {
    document.querySelector('#year').innerHTML += `
    <p>Année : ${data['date']}</p>
    `;
})