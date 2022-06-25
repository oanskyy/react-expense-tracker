import Expenses from "./components/Expenses";
import { expenses } from "./Data";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <Expenses
        date={expenses.date}
        title={expenses.title}
        amount={expenses.amount}
      /> */}
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
