// Task Manager 2
function taskManager2(){
    // Array
    this.tasks=[];
}
// method for adding new task
taskManager2.prototype.addTask=function(task){
    this.task.push(task);
};
// method for removing the tasks from a list
taskManager2.prototype.removeTask=function(task){
    this.tasks.this.tasks.filter(t=> t!==task);
};
// method for return all tasks
taskManager2.prototype.listTasks=function(){
    return this.tasks;
};
// created the new task Manager2 object
const taskM2=new taskManager2();
// add a task
taskM2.addTask('Go th University');
// for print
comsole.log(taskM2.listTasks());