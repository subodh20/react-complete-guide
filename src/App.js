import React, { Component } from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
//import ExpenseItems from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import logo from './logo.svg';
import './App.css';
const DUMMY_EXPENSES=[
  {
    id:'e1',
    title:'Toilet Paper',
    amount:95,
    date: new Date(2020,7,14),
  },
  {
    id:'e2',
    title:'New TV',
    amount:1195,
    date: new Date(2020,7,15),
  },
  { 
    id:'e3',
    title:'Car Insurance',
    amount:195,
    date: new Date(2021,7,14),
  },
]
function App() {
  const [expenses, setExpenses]=useState(DUMMY_EXPENSES);
  
  const addExpenseHandler= expense=>{
    setExpenses((prevExpenses)=>{
      return[expense, ...prevExpenses];
    });
    }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>;
    </div>
  );
}

export default App;
