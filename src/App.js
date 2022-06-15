import "./App.css";
import { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD-TODO":
      return { todos : [...state.todos, { text: action.text, completed: false }] };
    default:
      return state;
  }
}

function App() {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD-TODO", text });
          setText('')
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </>
  );
}

export default App;
