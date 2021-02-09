import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderOption from '../../features/OrderOption/OrderOption/OrderOption';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';

const OrderForm = (props) => {
  // console.log('props.options', props.options);
  // console.log('props.options', props.options[option.id]);
  // console.log('props.options', props.options);
  return (
    <Row>
      {pricing.map(option => {
        console.log('option', option);
        console.log('option.id', option.id);
        return (
          <Col key={option.name} md={4}>
            <OrderOption
              key={option.id}
              name={option.name}
              type={option.type}
              props={option}
              currentValue={option.id}
            />
          </Col>);
      })}
      <Col xs={12} sm={6} lg={4}>
        <OrderSummary tripCost={props.tripCost} options={props.options}/>
      </Col>
    </Row>
  );
};

console.log('pricing', pricing);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  pricing: PropTypes.object,
};

export default OrderForm;