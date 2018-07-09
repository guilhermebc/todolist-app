import {todos} from './state';
import {listen} from './lib/events';
import {addTodo, toggleTodoState} from './actions';

export function registerEventHandlers() {
    listen('click', '#addTodo', event => {
        const todoInput = document.getElementById('todoInput');
        var inputValue = todoInput.value.trim();

        if(inputValue){
            todos.dispatch(addTodo(inputValue));
            event.stopPropagation();
        }
    });

    listen('click', '.js_toggle_todo', event => {
        const id = Number.parseInt(event.target.getAttribute('data-id'), 10);
        todos.dispatch(toggleTodoState(id));
    });

    listen('keypress', '#todoInput', event => {
        const todoInput = document.getElementById('todoInput');
        var inputValue = todoInput.value.trim();
        var key = event.which || event.keyCode;

        if(key === 13 && inputValue){
            todos.dispatch(addTodo(inputValue));
            event.stopPropagation();
        }
    });
}
