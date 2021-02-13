import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption/OrderOption.scss';
import {formatPrice} from '../../../../utils/parseTrips';

const OrderOptionIcons = (props) => {
  const {values, setOptionValue} = props;
  return (
    <div className={styles.icons}>
      {values.map(value => (
        <div
          className={styles.icon}
          key={value.id}
          onClick={()=>setOptionValue(value.id)}
        >
          {value.name} ({formatPrice(value.price)})
        </div>
      ))}
    </div>
  );
};

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
