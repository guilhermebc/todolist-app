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
        let currentTodos = [];
        setTimeout(() => {

            var testimonials = document.querySelectorAll('.todo__item');
            Array.prototype.forEach.call(testimonials, function(elements, index) {
                elements.style.display='none';
            });

            if(currentFilterValue === 'done'){
                var testimonials = document.querySelectorAll('.todo__item--done');
                Array.prototype.forEach.call(testimonials, function(elements, index) {
                    elements.style.display='block';
                });
            } else if(currentFilterValue === 'open') {
                var testimonials = document.querySelectorAll('.todo__item--open');
                Array.prototype.forEach.call(testimonials, function(elements, index) {
                    elements.style.display='block';
                });
            } else if(currentFilterValue === 'all') {
                var testimonials = document.querySelectorAll('.todo__item');
                Array.prototype.forEach.call(testimonials, function(elements, index) {
                    elements.style.display='block';
                });
            }



        }, 100);

    });
}

function setInputFocus(id) {
    setTimeout(function () {
        document.getElementById(id).focus();
    }, 100);
}
