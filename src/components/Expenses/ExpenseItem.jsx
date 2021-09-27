import React, { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import Badge from 'react-bootstrap/Badge';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import './ExpenseItem.css';
import useStore from '../../store';

const ExpenseItem = (props) => {
  const removeExpenses = useStore((state) => state.removeExpenses);
  const setTotalExpensesYou = useStore((store) => store.setTotalExpensesYou);
  const [payer, setPayer] = useState('payer');

  const handleDelete = () => {
    removeExpenses(props.id);
  };
  const handlePayer = (e) => {
    console.log('select target', e);
    setPayer(e);
  };

  return (
    <li className='list-group-item container align-items-center'>
      <div className='row'>
        <div className='col-sm'>{props.name}</div>

        <div className='col-sm'>
          <DropdownButton
            id='dropdown-basic-button'
            title={payer}
            className='my-dropdown'
            onSelect={handlePayer}
          >
            <Dropdown.Item href='#/action-1' eventKey='You'>
              You
            </Dropdown.Item>
            <Dropdown.Item href='#/action-2' eventKey='Partner'>
              Partner
            </Dropdown.Item>
            <Dropdown.Item href='#/action-2' eventKey='Payer'>
              Payer
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div className='col-sm'>
          <Badge>
            <span className='badge badge-primary badge-pill mr-3'>
              £{props.cost}
            </span>
          </Badge>
          <TiDelete size='1.5em' onClick={handleDelete}></TiDelete>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
