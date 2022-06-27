import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { DUMMY_DATA } from "./Data";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expenses) => {
    console.log("in app js:", expenses);
    // Clean way of updating state when it's based on an older snapshot of the same state
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
