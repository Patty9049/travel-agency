import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderOption from '../../features/OrderOption/OrderOption/OrderOption';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';

const OrderForm = (props) => (
  <Row>
    {Object.keys(pricing).map(option => (
      <Col key={option.id} md={4}>
        <OrderOption key={option.id} name={option.name} {...option}/>
      </Col>
    ))}
    <Col xs={12} sm={6} lg={4}>
      <OrderSummary tripCost={props.tripCost} options={props.options}/>
    </Col>
  </Row>
);
console.log('pricing', pricing);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  pricing: PropTypes.array,
};

export default OrderForm;