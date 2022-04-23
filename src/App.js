import React, { useState } from 'react';
import './App.css';
import NewExpense from './components/addExpense/NewExpense';
import Expense from './components/expense/Expense';

const DUMMY_DATA = [
  {
    id : "e1",
    title : "Demo Title",
    qty : 1,
    price : 450,
    date : new Date(2021,6,17)
  },
  {
    id : "e2",
    title : "Fondant Cake",
    qty : 3,
    price : 700,
    date : new Date(2022,1,19)
  },
  {
    id : "e3",
    title : "Tier Cake",
    qty : 2,
    price : 900,
    date : new Date(2020,12,27)
  },
  {
    id : "e4",
    title : "Chocolates Bars",
    qty : 2,
    price : 120,
    date : new Date(2021,9,13)
  }
];

function App() {

  const [expenses,setExpenses] = useState(DUMMY_DATA);


  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
    console.log("In App.js ");
    console.log(expense);
  }


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
