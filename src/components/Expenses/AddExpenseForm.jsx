import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

const AddExpenseForm = () => {
  return (
    <form>
      <div className='row'>
        <div className='col-sm'>
          <label for='name'>Name</label>
          <input
            required='required'
            type='text'
            className='form-control'
            id='name'
          ></input>
        </div>
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
          <label for='cost'>Cost</label>
          <input
            required='required'
            type='number'
            className='form-control'
            id='cost'
          ></input>
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
