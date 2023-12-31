import { useState } from 'react'; 
import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

function Expenses(props) {
const [filteredYear, setFilteredYear] = useState('2022')

const handleChangeFilter = selectedYear => {
setFilteredYear(selectedYear);
};

const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
});

  return (
    <div className='expenses'>
      <ExpensesFilter
      selected={filteredYear} 
      onChangeFilter={handleChangeFilter}
      />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;

//{props.items.map((/*arrayName*/) => (
  //<ExpenseItem
 // key={expense.id}
 // title={/*arrayName*/.title} /*using example props*/
 // amount={/*arrayName*/.amount}  
 // date={/*arrayName*/.date}
//  />
// ))}

/*<ExpenseItem
title={props.items[0].title}
amount={props.items[0].amount}
//date={props.items[0].date}
/>
<ExpenseItem
title={props.items[1].title}
amount={props.items[1].amount}
//date={props.items[1].date}
/>
<ExpenseItem
title={props.items[2].title} 
amount={props.items[2].amount}
//date={props.items[2].date}
/>
<ExpenseItem
title={props.items[3].title}
amount={props.items[3].amount}
//date={props.items[3].date}
/>
*/
