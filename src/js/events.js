import {todos} from './state';
import {listen} from './lib/events';
import {addTodo, toggleTodoState} from './actions';

export function registerEventHandlers() {
    listen('click', '#addTodo', event => {
        const todoInput = document.getElementById('todoInput');
        let inputValue = todoInput.value.trim();

        setInputFocus('todoInput');

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
        let inputValue = todoInput.value.trim();
        let key = event.which || event.keyCode;

        setInputFocus('todoInput');

        if(key === 13 && inputValue){
            todos.dispatch(addTodo(inputValue));
            event.stopPropagation();
        }
    });

    listen('click', 'input[name="todoInputFilter"]', event => {
        let currentFilterValue = event.target.value;
        // let currentTodos = [];
        // currentState.map( index => {
        //     if(index.done && currentFilterValue === 'done'){
        //         currentTodos.push(index);
        //     } else if(!index.done && currentFilterValue === 'open') {
        //         currentTodos.push(index);
        //     } else if(currentFilterValue === 'all') {
        //         currentTodos.push(index);
        //     }
        // });
        // filterTodos(currentTodos);

        setTimeout(() => {
            filterTodoList('.todo__item', 'none');

            if(currentFilterValue === 'done'){
                filterTodoList('.todo__item--' + currentFilterValue, 'block');
            } else if(currentFilterValue === 'open') {
                filterTodoList('.todo__item--' + currentFilterValue, 'block');
            } else if(currentFilterValue === 'all') {
                filterTodoList('.todo__item', 'block');
            }

        }, 100);

    });
}

function setInputFocus(id) {
    setTimeout(function () {
        document.getElementById(id).focus();
    }, 100);
}

function filterTodoList(element, action){
    Array.prototype.forEach.call(document.querySelectorAll(element), (el) => {
        el.style.display = action;
    });
}