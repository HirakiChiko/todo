import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos,setTodos] = useState([]);
  // todosが更新された時に再レンダリングを行う
  // setTodos : todosの中身を更新する時に使う

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスク追加
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      // prevTodos(現在のタスク)に新規タスク(オブジェクト)を追加
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    // 引数と同じidを持つtodoのcompletedの状態を反転させる
    const todo = newTodos.find((todo) => todo.id === id );
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div>
      <div>TodoList</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクを削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length }</div>
    </div>
    );
}

export default App;
