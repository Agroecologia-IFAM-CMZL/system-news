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
    function loadNews(response) {
        const newsStory = response.find(news => news.id === response._id);

        if (newsStory) {
            var responseElement = document.createElement('div');

            var htmlContent = `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed text-bg-success p-3" 
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapse" 
                        aria-expanded="true" aria-controls="collapse"
                    >
                        ${response.title}
                    </button>
                </h2>

                <div id="collapse" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <h2 style="text-align: center;"><strong>${response.subtitle}</strong> </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id tellus blandit lectus vulputate interdum a a risus. In faucibus elit sed ligula ultrices gravida. <code>code</code>,</p>
                        <p>${response.paragraph1}.</p>
                        <p>${response.paragraph2}.</p>
                        <p>${response.paragraph3}.</p>
                    </div>
                </div>
            </div>
            `;

            // Set the HTML content
            responseElement.innerHTML = htmlContent;

            // get inside a div
            var divAccordion = document.getElementById('accordionExample');
            divAccordion.appendChild(responseElement);
        } else {
            console.log("News story not found.");
        }
    }
    
    loadNews(response._id)
}).catch(error => {
    console.error('Error:', error);
});
