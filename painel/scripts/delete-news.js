// let accessToken = localStorage.getItem('accessToken').replace(/['"]+/g, ""); // tirando as aspas

async function deleteNews(id) {
    await fetch(
        `http://localhost:3030/api/news/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": "true",
                "Authorization": "Bearer " + accessToken
            },
        }).then(response => {
            if (response.ok) {
                console.log("News Deleted successfully");
            } else {
                throw new Error("Network Response Error!");
            }
        }).catch(error => {
            console.log(error);
        }
    )
};

/*
document.getElementById('deleteButton').addEventListener('click', function() {
    // var newsId = ${response[count]._id};  
    fetch(http://localhost:3030/api/news/delete/${response[count]._id}, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        // Do something with the result
        alert('News item deleted successfully');
    })
    .catch((error) => {
        // Handle error here
        console.error('Error:', error);
        alert('An error occurred while deleting the news item');
    });
});
*/
