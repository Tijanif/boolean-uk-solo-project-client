import React, { useState } from 'react';
import './MainRight.css';
import useStore from '../../store';

const MainRight = () => {
  const [radio, setRadio] = useState({
    split: false,
    FytyFyty: false,
    grabAbag: false,
  });

  const incomeYou = useStore((store) => store.youValue);
  const incomePartner = useStore((store) => store.partnerValue);
  const expences = useStore((store) => store.expenses);
  const totalExpensesYou = useStore((store) => store.totalExpensesYou);
  const setTotalExpensesYou = useStore((store) => store.setTotalExpensesYou);

  console.log('My total expense', totalExpensesYou);

  let totalExpensesArr = expences.map((expense) => {
    return expense.cost;
  });
  console.log('Total expenses array ', totalExpensesArr);
  console.log('Your Income', incomeYou);
  console.log('Your Partner Income', incomePartner);

  let totalExpenses = totalExpensesArr.reduce((a, b) => a + b, 0);

  console.log('total total expenses', totalExpenses);

  //     PayForA + PayForB = TotalPay
  // PercentageToPayForA = PayForA/TotalPay *100
  // PercentageToPayForB = PayForB/TotalPay *100
  let totalPay = parseInt(incomeYou) + parseInt(incomePartner);

  console.log('Your Total Income', totalPay);
  console.log('Expenses', expences);

  let percentageToPayForYou = (parseInt(incomeYou) / totalPay) * 100;
  let percentageToPayForPartner = (parseInt(incomePartner) / totalPay) * 100;

  console.log('percentage ', percentageToPayForYou.toFixed(2));
  let youWillpay =
    (totalExpenses.toFixed(2) * percentageToPayForYou.toFixed(2)) / 100;

  let yourPartnerWillPay =
    (totalExpenses.toFixed(2) * percentageToPayForPartner.toFixed(2)) / 100;

  console.log('You will pay', youWillpay.toFixed(2));

  return (
    <>
      <div className='container'>
        <div className='row'>
          {/* Main Container */}
          <div className='container'>
            <h2>Dive our expenses</h2>
            <div className='container'>
              <div className='row'>
                <div className='col-sm radio-group'>
                  <ul>
                    <li>
                      <div>
                        <input
                          type='radio'
                          value='split'
                          checked={radio.split === true}
                          onChange={(e) =>
                            setRadio({
                              split: true,
                              FytyFyty: false,
                              grabAbag: false,
                            })
                          }
                        />
                        <label htmlFor='split-income'>
                          <span></span>
                          <div>
                            <span className='span-cont'>Based on Income</span>
                            {radio.split ? (
                              <p>
                                The amount you and your partner owe for shared
                                expenses is proportional to the total income you
                                each contribute to your household.
                              </p>
                            ) : (
                              ''
                            )}
                          </div>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div>
                        <input
                          type='radio'
                          checked={radio.FytyFyty === true}
                          onChange={(e) =>
                            setRadio({
                              split: false,
                              FytyFyty: true,
                              grabAbag: false,
                            })
                          }
                        />
                        <label htmlFor='50-50-split'>
                          <span></span>
                          <div>
                            <span className='span-cont'>50/50 split</span>
                            {radio.FytyFyty ? (
                              <p>
                                Your shared expenses are split in half for you
                                and your partner. When using this method your
                                income is irrelevant
                              </p>
                            ) : (
                              ''
                            )}
                          </div>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div>
                        <input
                          type='radio'
                          value='grabAbag'
                          checked={radio.grabAbag === true}
                          onChange={(e) =>
                            setRadio({
                              split: false,
                              FytyFyty: false,
                              grabAbag: true,
                            })
                          }
                        />
                        <label htmlFor='grabAbag-split'>
                          <span></span>
                          <div>
                            <span className='span-cont'>Grab bag method</span>
                            {radio.grabAbag ? (
                              <p>
                                Designate who will be responsible for each bill
                                using the dropdown menu next to each expense.
                                When using this method your income is
                                irrelevant.
                              </p>
                            ) : (
                              ''
                            )}
                          </div>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='col-sm'>
                  <div className='grahp'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Break Down */}
        <div className='breakdown'>
          <h3>Here is your total contribution breakdown</h3>
          <div className='report'>
            <div className='label'>Individual</div>
            <div className='percentageOfTotal'>
              % <span>of total</span>
            </div>
            <div className='amountDue'>Amount due</div>
          </div>

          <button className='you-btn'>
            <span className='you-span'>You</span>
            <span className='you-percentage'>
              {console.log(radio.split)}
              {radio.split === true
                ? `${percentageToPayForYou.toFixed(2)}%`
                : radio.FytyFyty === true
                ? `50%`
                : radio.grabAbag === true
                ? 'Bag'
                : '0%'}
            </span>
            <span className='you-amount-container'>
              <span className='you-amount'>
                {radio.split === true
                  ? `£${youWillpay.toFixed(2)}`
                  : radio.FytyFyty === true
                  ? `${totalExpenses.toFixed(2) / 2}`
                  : radio.grabAbag
                  ? 'bag'
                  : '0'}
              </span>
              /mo
            </span>
          </button>
          <button className='you-btn'>
            <span className='you-span'>Partner</span>
            <span className='you-percentage'>
              {' '}
              {radio.split === true
                ? `${percentageToPayForPartner.toFixed(2)}%`
                : radio.FytyFyty === true
                ? `50%`
                : radio.grabAbag === true
                ? 'Bag'
                : '0%'}
            </span>
            <span className='you-amount-container'>
              <span className='you-amount'>
                {radio.split === true
                  ? `£${yourPartnerWillPay.toFixed(2)}`
                  : radio.FytyFyty === true
                  ? `${totalExpenses.toFixed(2) / 2}`
                  : radio.grabAbag
                  ? 'bag'
                  : '0'}
              </span>
              /mo
            </span>
          </button>
          <button className='you-btn no-border'>
            <span className='you-span'>Total</span>
            <span className='you-percentage'>100%</span>
            <span className='you-amount-container'>
              <span className='you-amount'>£{totalExpenses}</span>/mo
            </span>
          </button>
        </div>
        {/* Conclution */}
        <div className='conclusion'>
          <h3>What Now?</h3>
          <p>
            Talk with your partner about which method of splitting expenses
            works best for you. Once you've chosen a method, consider creating a
            shared checking account, depositing your contributions from each
            paycheck, and paying bills using your new account for complete
            automation.
          </p>
        </div>
      </div>
    </>
  );
};

export default MainRight;
