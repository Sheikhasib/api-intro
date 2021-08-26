function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
}

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}

function displayUsers(data){
    const ul = document.getElementById('users');
    for(const user of data){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `title-name: ${user.title}, id: ${user.id}`;
        ul.appendChild(li);
    }
}