class Task{
    static staticID = 0;
    constructor(title, description, dueDate){
        Task.staticID++;
        this.id = Task.staticID;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }
}

module.exports = Task;