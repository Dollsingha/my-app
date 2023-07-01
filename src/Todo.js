const Todo = ({todos, getDeleteTodoId, getEditTodoId }) => {
  const deleteTodo = (id) => {
    //console.log(id);
    getDeleteTodoId(id);
  };
  const editTodo = (id) => {
   console.log(id);
    getEditTodoId(id);
  };
  return (
    <div>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title} 
          <span onClick={()=>deleteTodo(todo.id)}> &nbsp;<strong>Delete</strong></span>
          <span onClick={()=>editTodo(todo.id)}>  &nbsp;<strong>Edit</strong></span>
          </li> 
        ))}
      </ul>
    </div>
  );
};
export default Todo;