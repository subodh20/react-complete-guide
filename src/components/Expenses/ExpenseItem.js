import React, { Component, useState } from 'react';
import '../Expenses/ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
const ExpenseItem=(props)=>{ 
  const [title, setTitle]= useState(props.title);
  const clickHandler=()=>{
    setTitle("updated");
    console.log("clicked");
  }
return (<li><Card className="expense-item">
     <ExpenseDate date={props.date}/>;
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">{props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
     </Card>
     </li>);
}
 
export default ExpenseItem;