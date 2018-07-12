import {createStore} from './lib/state';
import {addTodoItem, editTodoItem, listTodos} from './lib/feature';

// import {createStore} from 'redux';


let initialState = {
    todos: listTodos()
};

function todoChangeHandler(state, change) {
    switch(change.type) {
        case 'ADD_TODO':
            let obj = {
                id: state.todos.length,
                text: change.text,
                done: false
            };
            state.todos.push(obj);
            addTodoItem(obj);

            break;
        case 'TODO_TOGGLE_DONE':
            for(let todo of state.todos) {
                if(todo.id === change.id) {
                    todo.done = !todo.done;
                    editTodoItem(todo, todo.done);
                    break;
                }
            }
            break;
    }
}

export const todos = createStore(todoChangeHandler, initialState);
