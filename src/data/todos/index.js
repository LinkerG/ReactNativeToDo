import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const getTodos = () => [
    newTodo({text:"Tarea 1", done: false}), 
    newTodo({text:"Tarea 2", done: false}), 
    newTodo({text:"Tarea 3", done: true}), 
    newTodo({text:"Tarea 4", done: true}),
    newTodo({text:"Tarea 5", done: false})
];

const newTodo = todo => ({
    id: uuidv4(),
    text: todo.text,
    createdAt: new Date(),
    done: todo.done
});

const updateToDo = (list, todo) => {
    const updateIndex = list.findIndex(t => t.id === todo.id);
    const newTodoList = [...list];
    newTodoList[updateIndex] = todo;
    return newTodoList;
};

const addTodo = (list, todo) => [...(list || []), newTodo(todo)];

const deleteTodo = (list, todo) => list.filter(t => t.id !== todo.id);

export {getTodos, updateToDo, addTodo, newTodo, deleteTodo};