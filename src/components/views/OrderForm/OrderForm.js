import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderOption from '../../features/OrderOption/OrderOption/OrderOptionContatiner';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';

const OrderForm = (props) => {
  console.log('props.options', props.options);
  return (
    <Row>
      {pricing.map(option => {
        return (
          <Col key={option.id} md={4}>
            <OrderOption {...option}
              currentValue={props.options[option.id]}
              required={true}
            />
          </Col>);
      })}
      <Col xs={12} sm={6} lg={4}>
        <OrderSummary tripCost={props.tripCost} options={props.options}/>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  pricing: PropTypes.object,
};

export default OrderForm;