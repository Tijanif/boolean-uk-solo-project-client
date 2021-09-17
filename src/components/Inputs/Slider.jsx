import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RangeSlider from 'react-bootstrap/FormRange';

const MAX_INCOME = 75000;
const Slider = (props) => {
  // const [youValue, setYouValue] = React.useState(0);
  // const [partnerValue, setPartnerValue] = React.useState(0);
  // console.log('You', youValue);
  // console.log('Partner', partnerValue);
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm='4'>
          {props.type}
        </Form.Label>
        <Col sm='4'>
          <RangeSlider
            step={500}
            min={0}
            max={MAX_INCOME}
            // value={props.value}
            // onChange={(e) => setValue(e.target.value)}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Slider;
