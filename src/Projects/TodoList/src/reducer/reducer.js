import {SET_FILTER, SET_TODOS, ADD_TODO,
     REMOVE_TODO,ON_ADD_TODO,REMOVE_ALL_TODOS,
     TOGGLE_COMPLETE_STATUS,SHOW_NOTIFICATION,HIDE_NOTIFICATION
    } from "../actions/actions";

const rootReducer = function (state = {
    activeFilter: "all",
    todos: [],
    notification: ""
}, action) {
    switch (action.type) {
        case SET_FILTER:
            return {...state, activeFilter: action.activeFilter};
        case SET_TODOS:
            return {...state, todos: action.todos}
        case ADD_TODO:
            return {...state, todos: state.todos.concat([action.todo])}
        case REMOVE_TODO:
            const newTodos = state.todos.filter((todo) => todo.id !== action.id);
            return {
                ...state,
                todos: newTodos
            }
        case ON_ADD_TODO:
            return {...state, todos: state.todos.concat([{ 
                content: action.todo,
                id: Math.random(),
                checked: false 
                }])
            }
        case REMOVE_ALL_TODOS:
            window.localStorage.removeItem("todos");
            return {...state, todos: []}
        case TOGGLE_COMPLETE_STATUS:
            const updatedTodos = state.todos.map((todo)=>{
                    if(todo.id === action.id){
                        let currentTodo = {...todo};
                        currentTodo.checked = !currentTodo.checked;
                        return currentTodo;
                        }
                    else{
                        return todo;
                    }
                }) ;
            return {...state, todos: updatedTodos};
        case SHOW_NOTIFICATION:
            return {...state,notification: action.yazi};
        case HIDE_NOTIFICATION:
            return {...state,notification: ""};;
        default:
            return state;
    }

};

export default rootReducer