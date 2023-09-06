1. 'ExpenseForm' & 'NewExpense' components:
The ExpenseForm component has a form for which a new expense with the Title, Date & Amoint properties & inputed & then rendered in the Expenses List below. The inout uses the useState Hook. The handleSubmit function tranfers the captured data into the expenseData constant & aranges the data respectively to be later rendered in the Expenses List, ater the NewExpense component saves the data through the habdleSaveExpenseData function.

2. The ExpenseDate component manages the input for the date section, with the help of inbuilt javascript and react tools.

3. The ExpenseItem is the reusable component in which the data gathered from the form is extracted through props & stored.

4. The ExpenseFilter component is used to filter ExpenseItem components according to the date(year) prop. This component is entered into the Expenses List.

5. The ExpensesList component maps the array of expenses with respective props (also giving it a unique key.id), after filtering for ExpenseItem components with the selected date prop.

6. The Chart folder contains the single ChartBar component, which a unique month label & a dynamic inline style in which the height in % of the blue barfill compared to the whole 'bar' set in the CSS file is proportional to the £{amount} property compared to the toal expense amount in the given year, the (maxValue). This is inserted into the Chart component which maps the ChartBars with the respective label (month 1st 3 letters) props to the shit my bro.

7. The Expenses component contains the filterhandler & the ExpensesFilter, ExpensesChart & ExpensesList components.

8. The App component renderes the NewExpense component for the form, & the Expenses component which has the rendered filter, List & Chart. Prior is the EXAMPLES array of already set expenses & the handleAddExpensefunction to render a new expense with the prevExpenses in the list below. With the help of the useState hook with state set to the EXAMPLES array.