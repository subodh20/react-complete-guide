import React, { Component } from 'react';
import {useState} from 'react';
import ExpenseItem from '../Expenses/ExpenseItem' ;
import Card from '../UI/Card';
import '../Expenses/Expenses.css';
import ExpensesFilter from '../ExpensesFilter';
import ExpensesList from '../Expenses/ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses=(props)=>{
  const [filteredYear, setFilteredYear]=useState('2020')
  const filterYearHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  };
  const filteredExpenses= props.items.filter( expense=>{
    return expense.date.getFullYear().toString()=== filteredYear;
  });
  
  
  return(
    <div>
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterYearHandler}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>

  );
  }


export default Expenses;