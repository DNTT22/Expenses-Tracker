import React, {useState} from 'react'
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

function App() {

const EXAMPLES = [
  {
    id: 'e1',
    title: 'Cocoa Butter',
    amount: 4.95,
    date: new Date(2019, 1, 14),
  },
  { id: 'e2', title: 'Monitor', amount: 127, date: new Date(2020, 9, 12) },
  {
    id: 'e3',
    title: 'LEM Milk',
    amount: 3.57,
    date: new Date(2021, 3, 28),
  },
  {
    id: 'e4',
    title: 'Wooden Desk',
    amount: 250,
    date: new Date(2022, 10, 12),
  },
];

const [expenses, setExpenses] = useState(EXAMPLES);

const handleAddExpense = (expense) => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses]
  });
};

return (
    <div>
      <h3>EXPENSE TRACKER</h3>
        <NewExpense onAddExpense={handleAddExpense}/>
        <Expenses items={expenses} />
    </div>
);
}

export default App;