import { useReducer } from "react";
import "./styles.css";

export default function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
