export function isEnabled(name) {
    return window.location.hash.split('#').includes(name);
}

export function addTodoItem(todoItem){

    let todoList = [];
    let getItem = localStorage.getItem('todo_list');

    let fields = {
        id: todoItem.id,
        text: todoItem.text,
        done: todoItem.done
    };

    if(getItem != null){

        todoList = JSON.parse(getItem);
        todoList.push(fields);

        localStorage.setItem('todo_list', JSON.stringify(todoList));

    } else {
        todoList.push(fields);
        localStorage.setItem('todo_list', JSON.stringify(todoList));
    }
}

export function editTodoItem(todo, done){
    let getItem = localStorage.getItem('todo_list');
    let todoList = JSON.parse(getItem);

    for (let i = 0; i < todoList.length; i++){
        let obj = todoList[i];
        for (let key in obj){
            if(todo.id === obj.id) {
                obj.done = done;
                removeTodoList();
                localStorage.setItem('todo_list', JSON.stringify(todoList));
                break;
            }
        }
    }
}

export function listTodos(){
    let getItem = localStorage.getItem('todo_list');
    let todoList = JSON.parse(getItem);
    if(todoList != null){
        return todoList;
    } else {
        return [];
    }

}

function removeTodoList(){
    localStorage.removeItem('todo_list');
}