import {createStore} from './lib/state';
import {addTodoItem, editTodoItem, listTodos} from './lib/feature';


// const initialState = {
//     todos: [
//         {
//             id: 0,
//             text: 'Take a look at the application',
//             done: true
//         },
//         {
//             id: 1,
//             text: 'Add ability to filter todos',
//             done: false
//         },
//         {
//             id: 2,
//             text: 'Filter todos by status',
//             done: false
//         },
//         {
//             id: 3,
//             text: 'Filter todos by text',
//             done: false
//         }
//     ]
// };

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
