import React from 'react';
import useStore from '../../store';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const expenses = useStore((state) => state.expenses);

  return (
    <ul className='list-group '>
      {expenses.map((expense) => (
        <ExpenseItem
          id={expense.id}
          name={expense.description}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
