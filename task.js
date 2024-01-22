export class Task {
	static staticID = 0;
	constructor(title, description, dueDate) {
		Task.staticID++;
		this._id = Task.staticID;
		this._title = title;
		this.description = description;
		this.dueDate = dueDate;
		this._completed = false;
	}

	get id() {
		return this._id;
	}

	set id(id) {
		this._id = id;
	}

	get title() {
		return this._title;
	}

	set title(title) {
		this._title = title;
	}

	get completed() {
		return this._completed;
	}

	set completed(completed) {
		this._completed = completed;
	}

	toggleCompleted() { 
		this._completed = !this._completed;
	}
}
