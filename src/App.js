import Expenses from "./components/Expenses";
import { expenses } from "./Data";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
