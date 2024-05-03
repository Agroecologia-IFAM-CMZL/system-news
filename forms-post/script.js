let accessToken = localStorage.getItem('accessToken').replace(/['"]+/g, ""); // tirando as aspas

async function sendForms() {
    await fetch('http://localhost:3030/api/news/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Credentials": "true",
            'Authorization': "Bearer " + accessToken
        },
        body: JSON.stringify({
            title: document.getElementById('idTitle').value,
            subtitle: document.getElementById('idCaption').value,
            paragraph1: document.getElementById('idParagraph1').value,
            paragraph2: document.getElementById('idParagraph2').value,
            paragraph3: document.getElementById('idParagraph3').value,
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('News Sent successfully');
        } else {
            throw new Error('Network Response Error!');
        }
    })
    .catch(error => {
        console.log(error);
    });
}
