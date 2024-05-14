// let accessToken = localStorage.getItem('accessToken').replace(/['"]+/g, ""); // removing the quotes

// show the news in API
fetch('http://localhost:3030/api/news/list/65be5b24d86fe87948001f64', {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }                                                                                           
    
    return response.json();
}).then(response => {
    for(var count = 0; count < response.length; count++) {
        var responseElement = document.createElement('div');

        var htmlContent = `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed text-bg-success p-3"
                    type="button" data-bs-toggle="collapse" data-bs-target="#collapse${count}"
                    aria-expanded="true" aria-controls="collapse${count}"
                >
                    ${response[count].title}
                </button>
            </h2>

            <div id="collapse${count}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body mb-4">
                    <h2 style="text-align: center;"><strong>${response[count].subtitle}</strong></h2>
                    <p style="text-align: center;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. </br>
                        Etiam id tellus blandit lectus vulputate interdum a a risus. </br>
                        In faucibus elit sed ligula ultrices gravida <code>code</code>. </br>
                    </p>

                    <p>${response[count].paragraph1}</p>
                    <p>${response[count].paragraph2}</p>
                    <p>${response[count].paragraph3}</p>

                    <a 
                        href="../forms-edit/index.html" 
                        class="btn btn-outline-success w-40 py-2 float-start" 
                        role="button"
                    >
                        Editar
                    </a>

                    <button 
                        type="button"
                        class="btn btn-danger w-40 py-2 float-end"
                        id="deleteButton"
                        title="http://localhost:3030/api/news/delete/${response[count]._id}"
                    >
                        Deletar
                    </button>
                    <!-- onclick="deleteNews(${response[count]._id})" -->
                    <!-- <button type="button" class="btn btn-danger" id="deleteButton">Delete News Item</button> -->

                    <a class="link-success">.</a> <!-- Sem isso vai dar problema na posição dos botões! -->
                </div>
            </div>
        </div>
        `;

        // Set the HTML content
        responseElement.innerHTML = htmlContent;

        // get inside a div
        var divAccordion = document.getElementById('accordionExample');
        divAccordion.appendChild(responseElement);
    }
}).catch(error => {
    console.error('Error:', error);
});