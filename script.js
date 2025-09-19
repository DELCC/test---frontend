fetch('https://test-delta-puce-48.vercel.app/year')
.then(response => response.json())
.then(data => {
    document.querySelector('#year').innerHTML += `
    <p>Année : ${data['date']}</p>
    `;
})