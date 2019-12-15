import {SET_FILTER, SET_TODOS, ADD_TODO,
         REMOVE_TODO , ON_ADD_TODO ,
     REMOVE_ALL_TODOS , TOGGLE_COMPLETE_STATUS ,
     SHOW_NOTIFICATION ,HIDE_NOTIFICATION} from "../actions/actions";

export function setFilter(newFilter){
    return {type: SET_FILTER, activeFilter: newFilter}
}

export function setTodos(todos){
    return {type: SET_TODOS, todos}
}

export function addTodo(todo){
    return {type: ADD_TODO, todo}
}

export function removeTodo(id){
    return {type: REMOVE_TODO, id}
}
export function onAddTodo(todo){
    return {type: ON_ADD_TODO, todo}
}
export function removeAllTodos( ){
    return {type: REMOVE_ALL_TODOS }
}
export function toggleCompleteStatus(id ){
    return {type: TOGGLE_COMPLETE_STATUS , id}
}
export function showNotification(yazi){
    return {type: SHOW_NOTIFICATION,yazi}
}
export function hideNotification( ){
    return {type: HIDE_NOTIFICATION  }
}