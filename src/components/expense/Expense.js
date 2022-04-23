import React, { useState } from 'react';
import Card from '../UI/Card'
import './expense.scss'
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';

const Expense = (props) => {

  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  )


  

  return (
    <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
    </Card>
  )
}

export default Expense