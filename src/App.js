import Expenses from "./components/Expenses/Expenses";
import { expenses } from "./Data";

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
