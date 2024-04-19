let taskCounter = 0;
const item = document.querySelector("#item");
const toDobox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter") {
            if(this.value.trim() !== ""){
            taskCounter = taskCounter + 1;
                addTodo(taskCounter, this.value)
            this.value = ""
            }
        }
    }
)
// const reorderList = () => {
//     const listItem = toDobox.querySelector("li");
//     listItem.forEach((listItem, index) => {
//         const taskText = listItem.textContent.replace(/^\d+\.\s/, '');
//         listItem.innerHTML = `${index + 1}. ${taskText} <i class="fas fa-times"></i>`
//         listItem.addEventListener("click", function(){
//             this.classList.toggle("done")
//         })
//         listItem.querySelector("i").addEventListener("click", function() {
//             listItem.remove();
//             reorderList();
//         })
//     });
// }
// const addTodo = (serialNumber, taskText) => {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `
//                              ${serialNumber}. ${taskText}
//                              <i class="fas fa-times"></i>
//     `;
//     listItem.addEventListener(
//         "click",
//         function() {
//             this.classList.toggle("done");
//         }
//     )
//     listItem.querySelector("i").addEventListener(
//         "click",
//         function() {
//             listItem.remove();
//             reorderList();
//         }
//     )
//     toDobox.appendChild(listItem)
// }
// Function to reorder the serial numbers of the remaining tasks
const reorderTasks = () => {
    // Select all the list items from the to-do box
    const listItems = toDobox.querySelectorAll("li");
    
    // Iterate over the list items
    listItems.forEach((listItem, index) => {
        // Update the innerHTML with the new serial number and task text
        const taskText = listItem.textContent.replace(/^\d+\.\s/, ''); // Remove the current serial number and dot
        listItem.innerHTML = `${index + 1}. ${taskText} <i class="fas fa-times"></i>`;

        // Re-attach the event listeners
        listItem.addEventListener("click", function() {
            this.classList.toggle("done");
        });

        listItem.querySelector("i").addEventListener("click", function() {
            listItem.remove();
            reorderTasks(); // Call reorderTasks after removing a task
        });
    });
};

// Add an event listener to the input element
item.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const taskText = this.value.trim();
        if (taskText !== "") {
            taskCounter++;
            addTodoItem(taskCounter, taskText);
            this.value = ""; // Clear the input field
        }
    }
});

// Function to add a new task
const addTodoItem = (serialNumber, taskText) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${serialNumber}. ${taskText} <i class="fas fa-times"></i>`;
    
    // Add event listener to toggle the 'done' class on click
    listItem.addEventListener("click", function() {
        this.classList.toggle("done");
    });

    // Add event listener to remove the list item on icon click
    listItem.querySelector("i").addEventListener("click", function() {
        listItem.remove();
        reorderTasks(); // Call reorderTasks function after removing a task
    });

    // Append the new list item to the to-do box
    toDobox.appendChild(listItem);
};
