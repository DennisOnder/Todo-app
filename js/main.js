window.addEventListener('DOMContentLoaded', function() {
    fetchTodos();
    completeButton();
    removeButton();
});

// Variables
var input = document.getElementById('inputField');
var inputButton = document.getElementById('inputBtn');
var placeForTodos = document.getElementById('todos');
var markup = '<div class="todo">' +
    '<div class="well">' +
    '<h3 class="todo-text" id="id">';
var markupend = '</h3>' +
    '<input type="button" class="btn btn-outline-light remBtn" value="Delete">' +
    '<input type="button" class="btn btn-outline-light completeBtn" value="Complete">' +
    '</div>' +
    '</div>';


inputButton.addEventListener('click', function() {
    addTodo();
    fetchTodoLast();
    input.value = '';
});

input.addEventListener('keyup', function (e) {
    if (e.which === 13 || e.keyCode === 13) {
        addTodo();
        fetchTodoLast();
        input.value = '';
    }
});

// Add event listener to existing buttons, delete and complete todos
function completeButton() {
    var completeButtons = document.getElementsByClassName('completeBtn');
    for (var i = 0; i < completeButtons.length; i++) {
        completeButtons[i].addEventListener('click', function () {
            this.parentElement.classList.toggle('well-complete');
        });
    }
}

function removeButton() {
    var buttons = document.getElementsByClassName('remBtn');
    var todos = JSON.parse(localStorage.getItem('task'));
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            var selector = this.parentElement.children[0].innerHTML;
            for (var i = 0; i < todos.length; i++) {
                if (selector == todos[i].name) {
                    todos.splice(i, 1);
                    this.parentElement.style.display = 'none';
                }
            }
            localStorage.setItem('task', JSON.stringify(todos));
        })
    }
}

// LOCAL STORAGE

// On submit, take the value, set it into a variable and then set the value in localStorage.

var myStorage = window.localStorage;

function addTodo() {
    var todo = {
        name: input.value
    }
    if (myStorage.getItem('task') === null) {
        var myTodo = [];
        myTodo.push(todo);
        myStorage.setItem('task', JSON.stringify(myTodo));
    } else {
        var myTask = localStorage.getItem('task');
        var storageArray = JSON.parse(myTask);
        storageArray.push(todo);
        localStorage.setItem('task', JSON.stringify(storageArray))
    }
}

function fetchTodos() {
    console.log('Fetching')
    var todos = JSON.parse(myStorage.getItem('task'));
    for (var i = 0; i < todos.length; i++) {
        placeForTodos.innerHTML +=
        markup + todos[i].name + markupend;
    }
}

function fetchTodoLast() {
    var todos = JSON.parse(myStorage.getItem('task'));
        placeForTodos.innerHTML +=
        markup + todos[todos.length - 1].name + markupend;
        completeButton();
        removeButton();
    }
