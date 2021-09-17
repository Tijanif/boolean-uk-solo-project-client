import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const expenses = [
    { id: 12, name: 'Netflix', cost: 12 },
    { id: 13, name: 'Rent', cost: 1400 },
    { id: 14, name: 'car service', cost: 50 },
  ];

  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
