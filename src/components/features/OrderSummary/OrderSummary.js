import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {calculateTotal, formatPrice}  from '../../../utils/parseTrips';


const OrderSummary = (props) => {
  console.log('OPTIONS-ORDERSUMMARY', props.options);
  console.log('props.tCost-ORDERSUMMARY', props.tripCost);
  return (
    <Row>
      <Col xs={12} sm={6} lg={4}>
        <h2  className={styles.component}>
          Total:<strong>{formatPrice(calculateTotal(props.tripCost, props.options))}</strong>
        </h2>
      </Col>
    </Row>
  );
};
OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;