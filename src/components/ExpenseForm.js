import React, {useState} from "react";
import './ExpenseForm.css';
import ExpenseDate from "./ExpenseDate";

const ExpenseForm = (props) => {
//title, amount & date editing:
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [EnteredDate, setEnteredDate] = useState('');

    const handleTitleChange = (event) => {
        setEnteredTitle(event.target.value);
    };

const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
};

    const handleDateChange = (event) => {
        setEnteredDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        //alert("I am here")

        const expenseData = {
         title: enteredTitle,
         amount: +  enteredAmount,
         date: new Date(EnteredDate)
        }

        props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    }


  return (
    <form onSubmit={handleSubmit}>
    <div className="new-expense__controls">
    <div className="new-expense__control">
        <label>Title</label>
        <input type='text' value={enteredTitle} onChange={handleTitleChange} />
        </div>       
        <div className="new-expense__control">
        <label>Amount</label>
        <input type='number' value={enteredAmount} min='0.0' step='1.0' onChange={handleAmountChange} />
        </div>    
        <div className="new-expense__control">
        <label>Date</label>
        <input type='date' value={EnteredDate} min='2019-01-01' max='2022-12-31' onChange={handleDateChange}/>
        </div>
        <div className="new-expense__actions">
            <button type='submit' className="addexpense">+ Expense</button>
        </div>
    </div>
   </form>
  );
};

export default ExpenseForm;