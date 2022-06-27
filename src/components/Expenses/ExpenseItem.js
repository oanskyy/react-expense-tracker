import "./ExpenseItem.css";
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate.js";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
