class Todo{
    todo_list;

    constructor(){
        this.todo_list = [];
    }

    add(task) {
        this.todo_list.push(task);
    }

    remove(index) {
        if (index >= 0 && index < this.todo_list.length){
            this.todo_list.splice(index, 1);
        }
        else {
            console.error("Index out of bounds");
        }
    }

    update(index, task){
        if (index >= 0 && index < this.todo_list.length){
            this.todo_list[index] = task;
        }
        else {
            console.error("Index out of bounds");
        }

    }

    get(index) {
        if (index >= 0 && index < this.todo_list.length){
            return this.todo_list[index];
        }
        else {
            return null;
        }
    }

    clear() {
        this.todo_list.length = 0;
    }

    getAll() {
        return this.todo_list;
    }

}

module.exports = Todo;
