function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => addComments(data))
}
loadComment();

function addComments(comments){
    
    const commentContainer = document.getElementById('comments');
    for(const comment of comments){
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h3>title: ${comment.name}</h3>
        <p>body: ${comment.body}</p>
        <h4>email: ${comment.email}</h4>
        `;
        commentContainer.appendChild(div);
        console.log(comment);
    }
}