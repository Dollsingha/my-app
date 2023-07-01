import Todo from "./Todo";
import AddTodoFrm from "./AddTodoFrom";
import { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodoItem, setEditTodoItem] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getEditTodoId = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    console.log(todo, 'test test');
    setEditTodoItem(todo);
  };

  const updateTodo = (todo) => {
    console.log(todo);
    setTodos(
      todos.map((item) => (item.id === todo.id ? { ...todo } : item))
    );
    setEditTodoItem([]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoFrm
        addTodo={addTodo}
        editTodoItem={editTodoItem}
        updateTodo={updateTodo}
      />
      <Todo todos={todos} getDeleteTodoId={deleteTodo}  getEditTodoId={getEditTodoId}/>
    </div>
  );
};
export default App;