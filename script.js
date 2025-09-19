fetch('https://test-delta-puce-48.vercel.app/year')
.then(response => response.json())
.then(data => {
    const date = data['date'];
    document.querySelector('#year').innerHTML += `
    <p>Année : ${date}</p>
    `;
});