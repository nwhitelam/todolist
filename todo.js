function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");
    var taskItem = document.createElement("li");
    var hrElement = document.createElement('hr');
    var button = document.createElement('button');
    button.textContent = 'Edit';
    taskItem.innerText = taskInput.value;
    taskItem.style.display = "inline-block";
    button.style.display = "inline-block";
    taskList.style.listStyleType = "disc";
    button.addEventListener("click", function() {
        var newText = prompt("Enter new text");
        if (newText !== null) {
        taskItem.innerText = newText;
        }
    });
    taskList.append(taskItem, button, hrElement);
    taskInput.value = "";
    taskInput.focus(); // Automatically focus on the input field
  
    // Scroll to the newly added task
    taskList.scrollTop = taskList.scrollHeight;
  }