// Variables
var input = document.getElementById('inputField');
var inputButton = document.getElementById('inputBtn');
var placeForTodos = document.getElementById('todos');

// Call functions
completeButton();
deleteButton();

// Take input and submit it as a new todo
inputButton.addEventListener('click', function () {
    var inputValue = input.value;
    placeForTodos.innerHTML +=
        '<div class="todo">' +
        '<div class="well">' +
        '<h3 class="todo-text">' + inputValue + '.' + '</h3>' +
        '<input type="button" class="btn btn-outline-light delBtn" value="Delete">' +
        '<input type="button" class="btn btn-outline-light completeBtn" value="Complete">' +
        '</div>' +
        '</div>';
    completeButton();
    deleteButton();
});

// If enter is pressed, call the add todo function
input.addEventListener('keyup', function (e) {
    if (e.which === 13 || e.keyCode === 13) {
        var inputValue = input.value;
        placeForTodos.innerHTML +=
            '<div class="todo">' +
            '<div class="well">' +
            '<h3 class="todo-text">' + inputValue + '.' + '</h3>' +
            '<input type="button" class="btn btn-outline-light delBtn" value="Delete">' +
            '<input type="button" class="btn btn-outline-light completeBtn" value="Complete">' +
            '</div>' +
            '</div>';
        completeButton();
        deleteButton();
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

function deleteButton() {
    var deleteButtons = document.getElementsByClassName('delBtn');
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function () {
            this.parentElement.style.display = 'none';
        });
    }
}