import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderOption from '../../features/OrderOption/OrderOption/OrderOptionContatiner';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';

const OrderForm = (props) => {
  console.log('props.options', props.options);
  // console.log('props.options', props.options[option.id]);
  // console.log('props.options', props.options);
  console.log('pricing', pricing);
  return (
    <Row>
      {pricing.map(option => {
        console.log('option', option);
        console.log('option.id', option.id);
        console.log('option.name', option.name);
        console.log('props.options[option.id]', props.options[option.id]);

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
//Object.keys(countries)

console.log('pricing', pricing);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  pricing: PropTypes.object,
};

export default OrderForm;