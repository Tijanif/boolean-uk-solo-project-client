import React from 'react';
import { TiDelete } from 'react-icons/ti';
import Badge from 'react-bootstrap/Badge';

const ExpenseItem = (props) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <div>
        <Badge>
          <span className='badge badge-primary badge-pill mr-3'>
            £{props.cost}
          </span>
        </Badge>

        <TiDelete size='1.5em'></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
