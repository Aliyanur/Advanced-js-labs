// Created an object to manage tasks
const taskManager1={
    // Created the array
    tasks:[],
    // For adding the new tasks to list
    addTask:function(task){
        this.tasks.push(task);
    },
    // For removing a specific fask from the list
    removeTask:function(task){
        this.tasks=this.tasks.filter(t=> t!==task);
    },

    // Return all current tasks
    listTasks:function(){
        return this.tasks;
    }
};

// I just Added  the tasks to the task manager
taskManager1.addTask("Preapere for exam");
taskManager1.addTask("Go to ONAY, for openning the card");
// For console
console.log(taskManager1.listTasks());