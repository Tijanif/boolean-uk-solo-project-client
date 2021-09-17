import React from 'react';
import Col from 'react-bootstrap/Col';
import RangeSlider from 'react-bootstrap/FormRange';
import useStore from '../../store';

const MainLeft = () => {
  // const [youValue, setYouValue] = React.useState(0);
  // const [partnerValue, setPartnerValue] = React.useState(0);
  const MAX_INCOME = 75000;
  const setYouValue = useStore((state) => state.setYouValue);
  const youValue = useStore((state) => state.youValue);
  const partnerValue = useStore((state) => state.partnerValue);
  const setPartnerValue = useStore((state) => state.setPartnerValue);

  let newYouValue = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'GBP',
  }).format(youValue);

  let newPartnerValue = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'GBP',
  }).format(partnerValue);

  return (
    <>
      <div className='wrapper-mainLeft'>
        <div className='main-content'>
          <h2>How much is your share?</h2>
          <p>
            Calculate how much you and your partner should contribute towards
            shared household expenses
          </p>
        </div>
        <div className='sliders'>
          <h3>Annual Income</h3>
          <div className='you'>
            <span>You</span>
            <Col sm='4'>
              <RangeSlider
                step={500}
                min={0}
                max={MAX_INCOME}
                value={youValue}
                onChange={(e) => setYouValue(e.target.value)}
              />
            </Col>
            <span>{newYouValue}</span>
          </div>
          <div className='partner'>
            <span>Partner</span>
            <Col sm='4'>
              <RangeSlider
                step={500}
                min={0}
                max={MAX_INCOME}
                value={partnerValue}
                onChange={(e) => setPartnerValue(e.target.value)}
              />
            </Col>
            <span>{newPartnerValue}</span>
          </div>
        </div>
        <div className='monthly-expenses'>
          <h3>Monthly Expenses</h3>
          <ul className='expenses'>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainLeft;
