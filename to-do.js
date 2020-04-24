//Fetching the title and changing it
var title= document.querySelector('title');
title.innerHTML = "To-do app";

//Form/Task Submit Event
var submit = document.querySelector('.btn');
submit.addEventListener('click',addTask)
//Task Delete Event
var taskList = document.querySelector('.list');
taskList.addEventListener('click',removeItem);

function addTask(){
    //Creating a list element
    var li = document.createElement('li');
    
    //Fetching data entered in input field by user
    var newItem = document.querySelector('input[name=task]').value;
    
    //Entering the above fetched data in list
    li.appendChild(document.createTextNode(newItem));

    //Clearing the input field for entering new task
    document.querySelector('input[name=task]').value="";

    //Entering the list(li) in ol/ul
    document.querySelector('.list').appendChild(li);
    
    //Creating a delete button next to stored task above
    var deleteBtn = document.createElement('button');

    //Assigning 'X' mark to delete button
    deleteBtn.appendChild(document.createTextNode("X"));
    
    //Adding class to delete button
    deleteBtn.setAttribute('class', 'del');

    //Appending the delte button to list
    li.appendChild(deleteBtn);
    } 

    //Removing a stored task
function removeItem(event){
    if(event.target.classList.contains('del')){
    var li = event.target.parentElement;
    taskList.removeChild(li);
    }
}

// storing the data in input field in a variable
var input = document.getElementById("myInput");

//Adding keyup event
input.addEventListener('keyup',addTaskKeyboard);

function addTaskKeyboard(e){
    //checking if the key pressed in enter key (the code for enter key is 13)
    if (e.keyCode === 13){
    //calling the submit button and using click() to automatically get the mouse click on submit button to trigger the addTask function
        document.getElementById("myBtn").click();
    }
}