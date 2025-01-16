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
    <div className="bg-gradient-to-br from-red-900 to-blue-800 h-lvh w-full content-center justify-items-center">
      <div className="shadow-lg rounded-2xl bg-white w-2/5 p-5">
        <h1 className="shadow-md text-center mb-5">Todo</h1>
        <div className=" justify-between bg-gray-500 h-9 content-center rounded-2xl w-full">
          <input
            className="bg-transparent w-4/5 outline-none text-white h-3 p-3 font-medium  placeholder-shown:text-white mr-0 border-gray-100 "
            type="text"
            placeholder="Enter Task"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <button
            className="bg-blue-600 p-1 pr-1 rounded-2xl right-0 w-1/5 mr-0 text-white"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
        <div>
          <ol>
            {taskSelector.map((todo) => (
              <div className="mt-4 w-full bg-yellow-100 border-2 rounded-lg justify-between p-2">
                <li
                  className="mr-0 w-full flex  content-center items-center"
                  key={todo.id}
                >
                  <p className="w-4/5 p-2 font-medium">{todo.todoTask}</p>
                  <button
                    className="bg-red-600 w-1/5 p-2 border rounded-md  text-white"
                    onClick={() => handleRemoveTask(todo.id)}
                  >
                    Remove
                  </button>
                </li>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Todo;
