const Task = require("./task");
const TaskService = require("./taskService");

const taskService = new TaskService();

let task0 = new Task("Tirar la basura","Tirar la basura en el contenedor",Date.now());
let task1 = new Task("Comprar un coche","Compra un toyota",Date.now());
let task2 = new Task("Pasear al perro","Pasear al perro en parque de al lado",Date.now());
let task3 = new Task("Pasear al gato","Pasear al gato y luego peinarlo",Date.now());

console.log(task2);

taskService.addTask(task0);
taskService.addTask(task1);
taskService.addTask(task2);
taskService.addTask(task3);

taskService.completeTask(task2.id);

console.log(taskService.getCompletedTasks());