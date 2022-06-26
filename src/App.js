import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import { expenses } from "./Data";

const App = () => {
  const addExpenseHandler = (expenses) => {
    console.log("in app js:", expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <ExpensesFilter /> */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
