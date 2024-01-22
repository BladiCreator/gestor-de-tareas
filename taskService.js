import { Task } from "./task.js";

export class TaskService {
	static tasks = [];

	addTask(Task) {
		TaskService.tasks.push(Task);
	}
	completeTask(id) {
		TaskService.tasks.forEach((task) => {
			console.log(task);
			if(task.id === id){
				task.toggleCompleted();
			}
		});
	}
	removeTask(id) {
		TaskService.tasks.remove((task) => task.id == id);
	}
	getPendingTasks() {
		return TaskService.tasks.filter((task) => task.completed == false);
	}
	getCompletedTasks() {
		return TaskService.tasks.filter((task) => task.completed == true);
	}
}