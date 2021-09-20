import React from 'react';
import { TiDelete } from 'react-icons/ti';
import Badge from 'react-bootstrap/Badge';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li className='list-group-item container align-items-center'>
      <div className='row'>
        <div className='col-sm'>{props.name}</div>

        <div className='col-sm'>
          <DropdownButton
            id='dropdown-basic-button'
            title='Payer'
            className='my-dropdown'
          >
            <Dropdown.Item href='#/action-1'>You</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Partner</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className='col-sm'>
          <Badge>
            <span className='badge badge-primary badge-pill mr-3'>
              £{props.cost}
            </span>
          </Badge>
          <TiDelete size='1.5em'></TiDelete>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
