import { useEffect, useState } from "react";
const AddTodoFrm = ({ addTodo, editTodoItem, updateTodo }) => {
  const [value, setValue] = useState("");
  const [showEditBtn, setShowEditBtn] = useState(false);

  useEffect(() => {
    if (editTodoItem && editTodoItem.title) {
      setValue(editTodoItem.title);
      setShowEditBtn(true);
    }
  }, [editTodoItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    if (!showEditBtn) {
      addTodo({
        id: Math.floor(Math.random() * 10000),
        title: value,
        isCompleted: false,
      });
      setValue("");
    } else {
      editTodoItem.title = value;
      updateTodo({
        id: editTodoItem.id,
        title: value,
        isCompleted: false,
      });
      setShowEditBtn(false);
      setValue("");
    }

    // e.preventDefault();
    // if (!value) return;
    // addTodo({
    //   id: Math.floor(Math.random() * 10000),
    //   title: value,
    //   isCompleted: false,
    // });
    // setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Todo..."
      />
      {!showEditBtn ? (
        <button className="button" type="submit">
          Add
        </button>
      ) : null}
      {showEditBtn ? (
        <button className="button" type="submit">
          Edit
        </button>
      ) : null}
    </form>
  );
};

export default AddTodoFrm;
