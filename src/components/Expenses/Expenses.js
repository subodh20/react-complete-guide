import React, { Component } from 'react';
import ExpenseItem from '../Expenses/ExpenseItem' ;
import Card from '../UI/Card';
import '../Expenses/Expenses.css';
const Expenses=(props)=>{

  return(
    <Card className="expenses">
      {props.items.map(expense=><ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date}/>)}
    </Card>

  );
}
export default Expenses;