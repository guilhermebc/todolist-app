import {isEnabled} from './lib/feature';

export function render(el, state) {
    const todoItems = state.todos.map(renderTodoItem).join('');
    el.innerHTML = renderApp(
        renderInput(),
        renderTodos(todoItems),
        renderInputRadio()
    );
}

function renderApp(input, todoList, inputFilter) {
    if(isEnabled('filter') && isEnabled('renderBottom')) {
        return isEnabled('renderBottom') && isEnabled('filter') && isEnabled('filterTop') ? renderAddTodoFilterAtTop(input, todoList, inputFilter) : renderAddTodoFilterAtBottom(input, todoList, inputFilter);
    } else if(isEnabled('filter')){
        return renderAddTodoFilterAtBottom(input, todoList, inputFilter);
    } else if(isEnabled('renderBottom')){
        return renderAddTodoAtBottom(input, todoList, inputFilter);
    } else {
        return renderAddTodoAtTop(input, todoList, inputFilter);
    }
}

function renderAddTodoAtTop(input, todoList, inputFilter) {
    return `<div id="app">
        ${input}
        ${todoList}  
    </div>`;
}

function renderAddTodoAtBottom(input, todoList, inputFilter) {
    return `<div id="app">
        ${todoList}
        ${input}
    </div>`;
}

function renderAddTodoFilterAtBottom(input, todoList, inputFilter) {
    return `<div id="app">
        ${todoList}
        ${inputFilter}
        ${input}
    </div>`;
}

function renderAddTodoFilterAtTop(input, todoList, inputFilter) {
    return `<div id="app">
        ${inputFilter}
        ${todoList}
        ${input}
    </div>`;
}

function renderInput() {
    return `<div class="todo__input"><input type="text" id="todoInput" autofocus><button id="addTodo">Add</button></div>`;
}

function renderTodos(todoItems) {
    return `<ul class="todo">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
    const todoClass = `todo__item todo__item--${todo.done ? 'done' : 'open'}`;
    return `
        <li class="${todoClass}">
            <input class="js_toggle_todo" type="checkbox" data-id="${todo.id}"${todo.done ? ' checked' : ''}>
            ${todo.text}
        </li>
    `;
}

function renderInputRadio() {
    return `
        <div class="todo__input">
            <input type="radio" id="todoInputRadio-1" class="todo__radio" name="todoInputFilter" value="all" checked><label for="todoInputRadio-1">Mostrar todos</label>
            <input type="radio" id="todoInputRadio-2" class="todo__radio" name="todoInputFilter" value="open"><label for="todoInputRadio-2">Somente abertos</label>
            <input type="radio" id="todoInputRadio-3" class="todo__radio" name="todoInputFilter" value="done"><label for="todoInputRadio-3">Somente fechados</label>
        </div>
    `;
}