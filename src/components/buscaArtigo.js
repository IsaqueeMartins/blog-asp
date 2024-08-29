fetch('https://localhost:7056/api/Artigo', {
    method: 'GET',
})
.then((res) => res.json())
.then((data) => console.log(data))
