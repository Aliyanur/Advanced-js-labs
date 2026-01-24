const taskManager3=(function(){
    let tasks=[];
    function addTask(task){
        tasks.push(task);
    }

    function removeTask(task){
        tasks=tasks.filter(t=> t!==task);
    }

    function listTasks(){
        return tasks;
    }

    return {addTask, removeTask, listTasks};
})();

taskManager3.addTask("Sleep");

console.log(taskManager3.listTasks());