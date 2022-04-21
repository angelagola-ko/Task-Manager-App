
// var taskIdCounter=0;

// var tasksInProgressEl = document.querySelector("#tasks-in-progress");
// var tasksCompletedEl = document.querySelector("#tasks-completed");
// //var buttonE1 = document.querySelector("#save-task");
// var pageContentE1 = document.querySelector("#page-content");
// var formE1= document.querySelector("#task-form");
// var tasksToDoE1 = document.querySelector("#tasks-to-do");

// var taskFormHandler = function(event) {
//     event.preventDefault();
//     var taskNameInput = document.querySelector("input[name='task-name']").value;
//     var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
//     if (!taskNameInput || !taskTypeInput) {
//         alert("You need to fill out the task form!");
//         return false;
//     }
//   // reset form fields for next task to be entered
//  // document.querySelector("input[name='task-name']").value = "";
//   //document.querySelector("select[name='task-type']").selectedIndex = 0;
//     formE1.reset();

//     var isEdit = formE1.hasAttribute("data-task-id");
//    // console.log(isEdit);
//    //has data attribute, so get task id and call function to complete edit process
//     //wraps cratetaskE1 and taskDataobj into variable

//     if (isEdit) {
//         var taskId = formE1.getAttribute("data-task-id");
//         completeEditTask(taskNameInput, taskTypeInput, taskId);
//     }
//     //no data attribute, so create object as normal and  pass to createTaskE1 function
//     else {
//         var taskDataObj = {
//             name: taskNameInput,
//             type: taskTypeInput
//         };
//         createTaskE1(taskDataObj);
//     }
// };
//     //package up data as an object


//     //send it as an argument to createTaskE1
//    // createTaskE1(taskDataObj);



//    // var listItemE1 = document.createElement("li");
//    // listItemE1.className = "task-item";

//     //Create div to hold task info and add to list item
//    // var taskInfoE1 = document.createElement("div");
//     //give it a class name
//    // taskInfoE1.className = "task-info";
//     // add HTML content to div
//    // taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
//    // listItemE1.appendChild(taskInfoE1);
//     //listItemE1.textContent = taskNameInput;
//    // tasksToDoE1.appendChild(listItemE1);

// var createTaskE1 = function(taskDataObj) {
//     //create list item
//     var listItemE1 = document.createElement("li");
//     listItemE1.className = "task-item";

//     //add a task id as a custom attribute
//     listItemE1.setAttribute("data-task-id", taskIdCounter);

//     //Create div to hold task info and add to list item
//     var taskInfoE1 = document.createElement("div");
//     //give it a class name
//     taskInfoE1.className = "task-info";
//     // add HTML content to div
//    // taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
//     taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
//     listItemE1.appendChild(taskInfoE1);

//     var taskActionsE1 = createTaskActions(taskIdCounter);//Where is taskIdCounter coming from?
//     listItemE1.appendChild(taskActionsE1);


//     //listItemE1.textContent = taskNameInput;
//     tasksToDoE1.appendChild(listItemE1);

//     taskIdCounter++;
// };

// var createTaskActions = function(taskId) {
//     var actionContainerE1 = document.createElement("div");
//     actionContainerE1.className = "task-actions";

// //create edit button
// var editButtonE1 = document.createElement("button");
// editButtonE1.textContent = "Edit";
// editButtonE1.className = "btn edit-btn";
// editButtonE1.setAttribute("data-task-id", taskId);

// actionContainerE1.appendChild(editButtonE1);

// //create delete button

// var deleteButtonE1 = document.createElement("button");
// deleteButtonE1.textContent = "Delete";
// deleteButtonE1.className = "btn delete-btn";
// deleteButtonE1.setAttribute("data-task-id", taskId);

// actionContainerE1.appendChild(deleteButtonE1);
// //add empty select element to div container
// var statusSelectE1 = document.createElement("select");
// statusSelectE1.className = "select-status";
// statusSelectE1.setAttribute("name", "status-change");
// statusSelectE1.setAttribute("data-task-id", taskId);

// actionContainerE1.appendChild(statusSelectE1);

// var statusChoices = ["To-Do", "In-progress", "Completed"];

// for (var i=0; i<statusChoices.length; i++) {
//     //create option element
//     var statusOptionE1 = document.createElement("option");
//     statusOptionE1.textContent = statusChoices[i];
//     statusOptionE1.setAttribute("value", statusChoices[i]);

//     //append to select
//     statusSelectE1.appendChild(statusOptionE1);
//     }
// return actionContainerE1;
// };
// var completeEditTask = function(taskName, taskType, taskId) {
//     // console.log(taskName, taskType, taskId);
//     //find the matching task list item with taskId value
// var taskSelected = document.querySelector(".task-item[data-task-id='"+ taskId +"']");
// //set new values
// taskSelected.querySelector("h3.task-name").textContent = taskName;
// taskSelected.querySelector("span.task-type").textContent = taskType;
// alert("Task Updated!");
// //remove data attribute from form
// formE1.removeAttribute("data-task-id");
// //update formE1 button to go back to saying "Add Task" instead of "Edit Task"
// formE1.querySelector("save-task").textContent = "Add Task";
// };
// var taskButtonHandler = function(event) {
//     console.log(event.target);
// //get target element from event
//     var targetE1 = event.target;
// //edit button was clicked
//     if (targetE1.matches(".edit-btn")) {
//         var taskId = targetE1.getAttribute("data-task-id");
//         editTask(taskId);
//     }
//     //delete button was clicked
//     else if (targetE1.matches(".delete-btn")) {
//         var taskId = targetE1.getAttribute("data-task-id");
//         deleteTask(taskId);
//     }
// };
//     //if (event.target.matches(".delete-btn")) {
//         //  console.log("you cliked a delete button!");
//         //get the elements task id
//         // var taskId = event.target.getAttribute("data-task-id");
//         // console.log(taskId);
//         // deleteTask(taskId);
//         // }
        
//   //      if (event.target.matches(".delete-btn")) {
//    //         var taskId = event.target.getAttribute("data-test-id");
//    //     };
        
//   //  };

  
//   //    formE1.removeAttribute("data-task-id");
//   //  document.querySelector("#save-task").textContent = "Add Task"

//   var taskStatusChangeHandler = function(event) {
//     // get the task item's id
//     var taskId = event.target.getAttribute("data-task-id");
    
//     // get the currently selected option's value and convert to lowercase
//     var statusValue = event.target.value.toLowerCase();
    
//     // find the parent task item element based on the id
//     var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    
//     if (statusValue === "to do") {
//         tasksToDoEl.appendChild(taskSelected);
//     } 
//     else if (statusValue === "in progress") {
//         tasksInProgressEl.appendChild(taskSelected);
//     } 
//     else if (statusValue === "completed") {
//         tasksCompletedEl.appendChild(taskSelected);
//     }
// };

// var editTask = function(taskId) {
//    // console.log("editing task #" + taskId);
//     //get task list item element
//     var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
//     //get content from task name and type
//     var taskName = taskSelected.querySelector("h3.task-name").textContent;
//     console.log(taskName);

//     var taskType = taskSelected.querySelector("span.task-type").textContent;
//     console.log(taskType);
// //adds 'Web' and etc under edit's list input
//     document.querySelector("input[name='task-name']").value = taskName;
//     document.querySelector("select[name='task-type']").value = taskType;
//     //changes button to savetask]
//     document.querySelector("#save-task").textContent = "Save Task";
// //stores it?
//     formE1.setAttribute("data-task-id", taskId);
// };
// var deleteTask = function(taskId) {
//     var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
//     console.log(taskSelected);
//     taskSelected.remove();
// };
// //    console.log(taskSelected);


// pageContentEl.addEventListener("change", taskStatusChangeHandler);
// pageContentE1.addEventListener("click", taskButtonHandler);
// formE1.addEventListener("submit", taskFormHandler);
// //buttonE1.addEventListener("click", createTaskHandler);
// //buttonE1.addEventListener("click", function() {
// //    var listItemE1 = document.createElement("li");
// //    listItemE1.className = "task-item";
// //    listItemE1.textContent = "This is a new task";
// //    tasksToDoE1.appendChild(listItemE1);
// //});


// //var taskDataObj = {
//  //   name: taskNameInput,
//  //   type: taskTypeInput
var taskIdCounter = 0;

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var tasksInProgressEl = document.querySelector("#tasks-in-progress");
var tasksCompletedEl = document.querySelector("#tasks-completed");
var pageContentEl = document.querySelector("#page-content");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if inputs are empty (validate)
  if (taskNameInput === "" || taskTypeInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

  // check if task is new or one being edited by seeing if it has a data-task-id attribute
  var isEdit = formEl.hasAttribute("data-task-id");

  if (isEdit) {
    var taskId = formEl.getAttribute("data-task-id");
    completeEditTask(taskNameInput, taskTypeInput, taskId);
  } else {
    var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
    };

    createTaskEl(taskDataObj);
  }
};

var createTaskEl = function(taskDataObj) {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // create task actions (buttons and select) for task
  var taskActionsEl = createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);
  tasksToDoEl.appendChild(listItemEl);

  // increase task counter for next unique id
  taskIdCounter++;
};

var createTaskActions = function(taskId) {
  // create container to hold elements
  var actionContainerEl = document.createElement("div");
  actionContainerEl.className = "task-actions";

  // create edit button
  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Edit";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.setAttribute("data-task-id", taskId);
  actionContainerEl.appendChild(editButtonEl);
  // create delete button
  var deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent = "Delete";
  deleteButtonEl.className = "btn delete-btn";
  deleteButtonEl.setAttribute("data-task-id", taskId);
  actionContainerEl.appendChild(deleteButtonEl);
  // create change status dropdown
  var statusSelectEl = document.createElement("select");
  statusSelectEl.setAttribute("name", "status-change");
  statusSelectEl.setAttribute("data-task-id", taskId);
  statusSelectEl.className = "select-status";
  actionContainerEl.appendChild(statusSelectEl);
  // create status options
  var statusChoices = ["To Do", "In Progress", "Completed"];

  for (var i = 0; i < statusChoices.length; i++) {
    // create option element
    var statusOptionEl = document.createElement("option");
    statusOptionEl.setAttribute("value", statusChoices[i]);
    statusOptionEl.textContent = statusChoices[i];

    // append to select
    statusSelectEl.appendChild(statusOptionEl);
  }

  return actionContainerEl;
};

var completeEditTask = function(taskName, taskType, taskId) {
  // find task list item with taskId value
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

  // set new values
  taskSelected.querySelector("h3.task-name").textContent = taskName;
  taskSelected.querySelector("span.task-type").textContent = taskType;

  alert("Task Updated!");

  // remove data attribute from form
  formEl.removeAttribute("data-task-id");
  // update formEl button to go back to saying "Add Task" instead of "Edit Task"
  formEl.querySelector("#save-task").textContent = "Add Task";
};

var taskButtonHandler = function(event) {
  // get target element from event
  var targetEl = event.target;

  if (targetEl.matches(".edit-btn")) {
    console.log("edit", targetEl);
    var taskId = targetEl.getAttribute("data-task-id");
    editTask(taskId);
  } else if (targetEl.matches(".delete-btn")) {
    console.log("delete", targetEl);
    var taskId = targetEl.getAttribute("data-task-id");
    deleteTask(taskId);
  }
};

var taskStatusChangeHandler = function(event) {
  console.log(event.target.value);

  // find task list item based on event.target's data-task-id attribute
  var taskId = event.target.getAttribute("data-task-id");

  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

  // convert value to lower case
  var statusValue = event.target.value.toLowerCase();

  if (statusValue === "to do") {
    tasksToDoEl.appendChild(taskSelected);
  } else if (statusValue === "in progress") {
    tasksInProgressEl.appendChild(taskSelected);
  } else if (statusValue === "completed") {
    tasksCompletedEl.appendChild(taskSelected);
  }
};

var editTask = function(taskId) {
  console.log(taskId);

  // get task list item element
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

  // get content from task name and type
  var taskName = taskSelected.querySelector("h3.task-name").textContent;
  console.log(taskName);

  var taskType = taskSelected.querySelector("span.task-type").textContent;
  console.log(taskType);

  // write values of taskname and taskType to form to be edited
  document.querySelector("input[name='task-name']").value = taskName;
  document.querySelector("select[name='task-type']").value = taskType;

  // set data attribute to the form with a value of the task's id so it knows which one is being edited
  formEl.setAttribute("data-task-id", taskId);
  // update form's button to reflect editing a task rather than creating a new one
  formEl.querySelector("#save-task").textContent = "Save Task";
};

var deleteTask = function(taskId) {
  console.log(taskId);
  // find task list element with taskId value and remove it
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
  taskSelected.remove();
};

// Create a new task
formEl.addEventListener("submit", taskFormHandler);

// for edit and delete buttons
pageContentEl.addEventListener("click", taskButtonHandler);

// for changing the status
pageContentEl.addEventListener("change", taskStatusChangeHandler);
