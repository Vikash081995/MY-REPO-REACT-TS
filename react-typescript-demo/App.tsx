import Todos from "./Proj2/Todos";
import NewTodo from "./Proj2/NewTodo";
import TodosContextProvider from "./Proj2/store/todos-context";

const App = () => {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
};

export default App;
