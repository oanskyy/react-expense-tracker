import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleForm = () => {
    // setIsVisible(!isVisible);
    setIsEditing(!isEditing);
  };
  const saveExpenseHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString,
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={toggleForm}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={toggleForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
