import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [isVisible, setIsVisible] = useState(true);

  // const toggleForm = () => {
  //   setIsVisible(!isVisible);
  // };

  const [enteredTitle, setTitle] = useState(" ");
  const [enteredAmount, setAmount] = useState(" ");
  const [enteredDate, setDate] = useState(" ");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  //   const titleChangeHandler = (event) => {
  //     // setUserInput({
  //     //   ...userInput,
  //     //   title: event.target.value,
  //     // });
  //     setUserInput((prevState) => {
  //         return {...prevState, title: event.target.value}
  //     })
  //   };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setTitle("");
    setAmount("");
    setDate("");

    // setIsVisible(!isVisible);
    // props.setIsEditing(!props.isEditing);
    props.onCancel();
  };

  return (
    <div>
      {/* {!isVisible && ( */}
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019.01.01"
              max="2022.12.12"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          {/* <button type="button" onClick={toggleForm}> */}
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add expense</button>
        </div>
      </form>
      {/* )} */}

      {/* {isVisible && (
        <div className="new-expense__actions">
          <button type="button" onClick={toggleForm}>
            Add New Expense
          </button>
        </div>
      )} */}
    </div>
  );
};

export default ExpenseForm;
