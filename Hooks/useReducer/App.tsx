// import statements

import React from "react";
import { useReducer } from "react";

// typescript for props
interface State {
  count: number;
}

type Action =
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    };

// ruducer function
const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

// action creator
const increment = (): Action => ({
  type: "increment"
});
const decrement = (): Action => ({
  type: "decrement"
});


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
};
