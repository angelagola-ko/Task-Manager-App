
//var buttonE1 = document.querySelector("#save-task");
var formE1= document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formE1.reset();
    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //send it as an argument to createTaskE1
    createTaskE1(taskDataObj);

   // var listItemE1 = document.createElement("li");
   // listItemE1.className = "task-item";

    //Create div to hold task info and add to list item
   // var taskInfoE1 = document.createElement("div");
    //give it a class name
   // taskInfoE1.className = "task-info";
    // add HTML content to div
   // taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
   // listItemE1.appendChild(taskInfoE1);
    //listItemE1.textContent = taskNameInput;
   // tasksToDoE1.appendChild(listItemE1);
};
var createTaskE1 = function(taskDataObj) {
    //create list item
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";

    //Create div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
    //give it a class name
    taskInfoE1.className = "task-info";
    // add HTML content to div
   // taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemE1.appendChild(taskInfoE1);
    //listItemE1.textContent = taskNameInput;
    tasksToDoE1.appendChild(listItemE1);
}

formE1.addEventListener("submit", taskFormHandler);
//buttonE1.addEventListener("click", createTaskHandler);
//buttonE1.addEventListener("click", function() {
//    var listItemE1 = document.createElement("li");
//    listItemE1.className = "task-item";
//    listItemE1.textContent = "This is a new task";
//    tasksToDoE1.appendChild(listItemE1);
//});

