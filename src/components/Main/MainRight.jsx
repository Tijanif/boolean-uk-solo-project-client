import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import useStore from '../../store';
import './MainRight.css';

const MainRight = () => {
  const youValue = useStore((state) => state.youValue);
  const partnerValue = useStore((state) => state.partnerValue);
  const [radio, setRadio] = useState({
    split: false,
    FytyFyty: false,
    grabAbag: false,
  });

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='container'>
            <h2>Dive our expenses</h2>
            <div className='container'>
              <div className='row'>
                <div className='col-sm'>
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
                            <span>Based on Income</span>
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
                            <span>50/50 split</span>
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
                            <span>Grab bag method</span>
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
            <span className='you-percentage'>6%</span>
            <span className='you-amount-container'>
              <span className='you-amount'>£100</span>/mo
            </span>
          </button>
          <button className='you-btn'>
            <span className='you-span'>Partner</span>
            <span className='you-percentage'>6%</span>
            <span className='you-amount-container'>
              <span className='you-amount'>£500</span>/mo
            </span>
          </button>
          <button className='you-btn no-border'>
            <span className='you-span'>Total</span>
            <span className='you-percentage'>100%</span>
            <span className='you-amount-container'>
              <span className='you-amount'>£1,500</span>/mo
            </span>
          </button>
        </div>
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
