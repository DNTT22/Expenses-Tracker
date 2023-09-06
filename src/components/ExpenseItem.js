import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {

const [title, setTitle] = useState(props.title)

const handleClick = (event) => {
setTitle(event.target.value);
};

    return (
    <div className="expense-item">
        
           <ExpenseDate date={props.date} />
           
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">£{props.amount}</div>
            <button className='ct' onClick={handleClick}>Change title</button>
            </div>
    </div>
    );
}

export default ExpenseItem;