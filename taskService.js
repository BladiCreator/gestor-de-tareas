const Task = require("./task");

class TaskService {
	static tasks = [];

	addTask(title, description, dueDate) {
		TaskService.tasks.push<Task>(new Task(title, description, dueDate));
	}
	completeTask(id) {
		TaskService.tasks.find((task) => {
			if(task.id == id)
				task.completed = true;
		});
	}
	removeTask(id) {
		TaskService.tasks.remove((task) => task.id == id);
	}
	getPendingTasks() {
		return TaskService.tasks.filter((task) => task.complete == false);
	}
	getCompletedTasks() {
		return TaskService.tasks.filter((task) => task.complete == true);
	}
}

module.exports = TaskService;