import { useDispatch, useSelector } from "react-redux";
import { myRootState } from "../../Features/Store/MainStore";
import { addTask, removeTask } from "../../Features/Slices/TodoSlice";
import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const taskSelector = useSelector(
    (state: myRootState) => state.todo.todoItems,
  );

  const taskDispatch = useDispatch();

  const handleAddTask = () => {
    taskDispatch(addTask(todo));
    setTodo("");
  };
  const handleRemoveTask = (id) => {
    taskDispatch(removeTask(id));
  };
  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Task"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        <ul>
          {taskSelector.map((todo) => (
            <div>
              <li key={todo.id}>
                {todo.todoTask}
                <button onClick={() => handleRemoveTask(todo.id)}>
                  Remove
                </button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
