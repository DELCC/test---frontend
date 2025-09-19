fetch('https://test-delta-puce-48.vercel.app/year')
.then(response => response.json())
.then(data => {
    const date = data['year'];
    document.querySelector('#year').innerHTML += `
    <p>FAKE_YEAR_FOR_TEST : ${date}</p>
    `;
});