import React, { useState } from 'react';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import useStore from '../../store';
import uuid from 'react-uuid';

const AddExpenseForm = () => {
  const setExpenses = useStore((state) => state.setExpenses);
  const [description, setName] = useState('');
  const [cost, setCost] = useState('');
  const [payer, setPayer] = useState('');

  const handleExpenses = (e) => {
    e.preventDefault();

    const newExpense = {
      id: uuid(),
      description: description,
      const: parseInt(cost),
    };

    setExpenses(newExpense);
    setName('');
    setCost('');

    console.log('Cost', cost);
    console.log('describtion', description);
    console.log('Payer', payer);
  };

  return (
    <form onSubmit={handleExpenses}>
      <div className='row'>
        <div className='col-sm'>
          <label for='name'>DESCRIPTION</label>
          <input
            required='required'
            type='text'
            className='form-control'
            id='description'
            value={description}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className='col-sm'>
          <label for='cost'>COST</label>
          <input
            required='required'
            type='number'
            className='form-control'
            id='cost'
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          ></input>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Form.Select
            size='sx'
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
          >
            <option value='You'>You</option>
            <option value='Partner'>Partner</option>
          </Form.Select>

          {/* <DropdownButton id='dropdown-basic-button' title='Payer'>
            <Dropdown.Item href='#/action-1'>You</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Partner</Dropdown.Item>
          </DropdownButton> */}
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <button type='submit' className='btn btn-primary mt-3'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
