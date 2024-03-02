const form = document.querySelector('#new-item'); // input form
const input = document.querySelector('#new-task'); // what is entered
const todoList = document.querySelector('#list'); // the list
// input.setAttribute('id', 'todoList') //adds id to list element

todoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.tagName)
        e.target.parentElement.remove();
    } else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('strike');
        const strike = document.createElement('span')
        // const ele = document.getElementsByTagName('li');
        // ele.style.setProperty("text-decoration", "line-through");
     }
    })

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(input.value);
    const newItem = document.createElement('li')
    const removeBtn = document.createElement('button') // creates button
    newItem.setAttribute('id', 'newitem')
    removeBtn.setAttribute('id', 'removebtn' )
    newItem.innerText = input.value;
    removeBtn.innerText = 'remove';
    newItem.appendChild(removeBtn);
    input.value = '';
    todoList.appendChild(newItem);
})
