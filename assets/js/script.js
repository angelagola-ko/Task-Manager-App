
var taskIdCounter=0;

//var buttonE1 = document.querySelector("#save-task");
var pageContentE1 = document.querySelector("#page-content");
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

    //add a task id as a custom attribute
    listItemE1.setAttribute("data-task-id", taskIdCounter);

    //Create div to hold task info and add to list item
    var taskInfoE1 = document.createElement("div");
    //give it a class name
    taskInfoE1.className = "task-info";
    // add HTML content to div
   // taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemE1.appendChild(taskInfoE1);

    var taskActionsE1 = createTaskActions(taskIdCounter);//Where is taskIdCounter coming from?
    listItemE1.appendChild(taskActionsE1);


    //listItemE1.textContent = taskNameInput;
    tasksToDoE1.appendChild(listItemE1);

    taskIdCounter++;
};

var createTaskActions = function(taskId) {
    var actionContainerE1 = document.createElement("div");
    actionContainerE1.className = "task-actions";

//create edit button
var editButtonE1 = document.createElement("button");
editButtonE1.textContent = "Edit";
editButtonE1.className = "btn edit-btn";
editButtonE1.setAttribute("data-task-id", taskId);

actionContainerE1.appendChild(editButtonE1);

//create delete button

var deleteButtonE1 = document.createElement("button");
deleteButtonE1.textContent = "Delete";
deleteButtonE1.className = "btn delete-btn";
deleteButtonE1.setAttribute("data-task-id", taskId);

actionContainerE1.appendChild(deleteButtonE1);
//add empty select element to div container
var statusSelectE1 = document.createElement("select");
statusSelectE1.className = "select-status";
statusSelectE1.setAttribute("name", "status-change");
statusSelectE1.setAttribute("data-task-id", taskId);

actionContainerE1.appendChild(statusSelectE1);

var statusChoices = ["To-Do", "In-progress", "Completed"];

for (var i=0; i<statusChoices.length; i++) {
    //create option element
    var statusOptionE1 = document.createElement("option");
    statusOptionE1.textContent = statusChoices[i];
    statusOptionE1.setAttribute("value", statusChoices[i]);

    //append to select
    statusSelectE1.appendChild(statusOptionE1);
}
return actionContainerE1;
};
var taskButtonHandler = function(event) {
    console.log(event.target);

    if (event.target.matches(".delete-btn")) {
      //  console.log("you cliked a delete button!");
        //get the elements task id
        var taskId = event.target.getAttribute("data-task-id");
        console.log(taskId);
    }
    
    if (event.target.matches(".delete-btn")) {
        var taskId = event.target.getAttribute("data-test-id");
        deleteTask(taskId);
    };
    
};

var deleteTask = function(taskId) {
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    console.log(taskSelected);


    taskSelected.remove();
//    console.log(taskSelected);
}; 





pageContentE1.addEventListener("click", taskButtonHandler);
formE1.addEventListener("submit", taskFormHandler);
//buttonE1.addEventListener("click", createTaskHandler);
//buttonE1.addEventListener("click", function() {
//    var listItemE1 = document.createElement("li");
//    listItemE1.className = "task-item";
//    listItemE1.textContent = "This is a new task";
//    tasksToDoE1.appendChild(listItemE1);
//});

