import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   const [title, setTitle] = useState('');
  //   const [amount, setAmount] = useState('');
  //   const [date, setDate] = useState('');

  //   const titleChangeHandler = (event) => {
  //     setTitle(event.target.value);
  //     console.log(event.target.value);
  //     console.log(title);
  //   };

  //   const amountChangeHandler = (event) => {
  //     setAmount(event.target.value);
  //     console.log(event.target.value);
  //     console.log(amount);
  //   };

  //   const dateChangeHandler = (event) => {
  //     console.log(event.target.value);
  //     setUserInput({
  //       ...userInput,
  //       title: event.target.value,
  //     });
  //   };

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      title: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            // onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019.01.01"
            max="2022.04.01"
            // onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
