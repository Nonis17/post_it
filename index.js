
document.addEventListener("DOMContentLoaded", function () {
    dynamicTitle();
});

const list = document.querySelector('.container ul');

//delete to do's
list.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//Add a to do 
const addForm = document.forms['addTodo'];

let titlePostIt = document.getElementById("titlePostIt");

function dynamicTitle() {
    var titleText = "Title..";
    titlePostIt.value = titleText;

    titlePostIt.onfocus = function () {
        if (this.value == titleText) {
            this.value = '';
        }
    }
    titlePostIt.onblur = function () {
        if (this.value == "") {
            this.value = titleText;
        }
    };
};


//Function on the submit button
addForm.addEventListener('submit', function (e) {
    let errorMsg = document.getElementById("errorMessage");
    e.preventDefault();

    let value = addForm.querySelector('input[type="text"]').value
    let bio = document.getElementById('descriptionToDo').value

    if (value === "Title..") {

        errorMsg.innerHTML = 'Write a title';


    } else {
        //Create element 
        const li = document.createElement('li');
        const toDoName = document.createElement('span');
        const toDoComment = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //add content to span-tags
        deleteBtn.textContent = 'X';
        toDoName.textContent = value;
        toDoComment.textContent = bio;

        //add classes
        toDoName.classList.add('titlePostIt', 'doTitle');
        deleteBtn.classList.add('delete');
        toDoComment.classList.add('comment');

        li.appendChild(toDoName);
        li.appendChild(toDoComment);
        li.appendChild(deleteBtn);

        //Append the li to the DOM  
        list.appendChild(li)

        value = addForm.querySelector('input[type="text"]').value = '';
        bio = document.getElementById('descriptionToDo').value = '';

        dynamicTitle();
        errorMsg.innerHTML = '';
    }



}); 