async function sendData() {
    await fetch(
        'http://localhost:3030/api/user/login/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'Origin',
            "Access-Control-Allow-Credentials": "true"
        },
        body: JSON.stringify({
            "username": document.getElementById("idName").value,
            "email": document.getElementById("idEmail").value,
            "password": document.getElementById("idPassword").value
        })
    })
    .then(response => {
        if (response.ok) {
            location.href = "./painel/index.html";
        } else {
            throw new Error('Network Response Error!');
        }
        
        return response.json();
    })
    .then(json => {
        localStorage.setItem('accessToken', JSON.stringify(json.accessToken));
    })
    .catch(error => {
        console.log(error);
    });
}
