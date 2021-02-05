import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import OrderSummary from '../../features/OrderSummary/OrderSummary';


const OrderForm = (props) => (
  <Row>
    <Col xs={12} sm={6} lg={4}>
      <OrderSummary tCost={props.tripCost} options={props.options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;