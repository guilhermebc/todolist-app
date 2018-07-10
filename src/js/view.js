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
    return `<div id="app" class="container">
                <h2 class="text-center">TodoList App</h2>
                <div class="row text-left">
                    <div class="col-xs-12 col-md-12 px-1">
                        ${input}
                    </div>
                    <div class="col-xs-12 col-md-12 px-1">
                        ${todoList}
                    </div>
                </div>  
            </div>`;
}

function renderAddTodoAtBottom(input, todoList, inputFilter) {
    return `<div id="app" class="container">
                <h2 class="text-center">TodoList App</h2>
                <div class="row text-left">
                    <div class="col-xs-12 col-md-12 px-1">
                        ${todoList}
                    </div>
                    <div class="col-xs-12 col-md-12 px-1">
                        ${input}
                    </div>
                </div>
            </div>`;
}

function renderAddTodoFilterAtBottom(input, todoList, inputFilter) {
    return `<div id="app" class="container">
                <h2 class="text-center">TodoList App</h2>
                <div class="row text-left">
                    <div class="col-xs-12 col-md-12 px-1">
                        ${todoList}
                    </div>
                    <div class="col-xs-12 col-md-12">
                        ${inputFilter}    
                    </div>
                    <div class="col-xs-12 col-md-12 px-1">
                        ${input}
                    </div>
                </div>
            </div>`;
}

function renderAddTodoFilterAtTop(input, todoList, inputFilter) {
    return `<div id="app" class="container">
                <h2 class="text-center">TodoList App</h2>
                <div class="row text-left">
                    <div class="col-xs-12 col-md-12">
                        ${inputFilter}
                    </div>
                    <div class="col-xs-12 col-md-12 px-1">
                        ${todoList}    
                    </div>
                    <div class="col-xs-12 col-md-12 px-1">
                        ${input}
                    </div>
                </div>
            </div>`;
}

function renderInput() {
    return `
        <div class="col-xs-12 col-md-5 input-group mb-3 pl-0 todo__input">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Todo</span>
          </div>
          <input type="text" id="todoInput" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" autofocus>
          <button id="addTodo" class="btn btn-primary">Add</button>
        </div>
    `;
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
        <div class="row my-2">
            <div class="input-group mb-3 col-xs-12 col-md-4">
              <div class="input-group-prepend">
                <div class="input-group-text">
                <input type="radio" id="todoInputRadio-1" name="todoInputFilter" aria-label="Radio button for following text input" value="all" checked>
                </div>
              </div>
              <label for="todoInputRadio-1" class="form-control">Mostrar todos</label>
            </div>
            <div class="input-group mb-3 col-xs-12 col-md-4">
              <div class="input-group-prepend">
                <div class="input-group-text">
                <input type="radio" id="todoInputRadio-2" name="todoInputFilter" aria-label="Radio button for following text input" value="open">
                </div>
              </div>
              <label for="todoInputRadio-2" class="form-control">Somente abertos</label>
            </div>
            <div class="input-group mb-3 col-xs-12 col-md-4">
              <div class="input-group-prepend">
                <div class="input-group-text">
                <input type="radio" id="todoInputRadio-3" name="todoInputFilter" aria-label="Radio button for following text input" value="done">
                </div>
              </div>
              <label for="todoInputRadio-3" class="form-control">Somente fechados</label>
            </div>
        </div>
    `;
}