const Task = require("./task");

class TaskService {
	static tasks = [];

	addTask(title, description, dueDate) {
		TaskService.tasks.push(new Task(title, description, dueDate));
	}
	completeTask(id) {
		TaskService.tasks.find((task) => task.id == id).complete = true;
	}
	removeTask(id) {
		TaskService.tasks.remove((task) => task.id == id);
	}
	getPendingTasks() {
		TaskService.tasks.filter((task) => task.complete == false);
	}
	getCompletedTasks() {
		TaskService.tasks.filter((task) => task.complete == true);
	}
}

module.exports = TaskService;