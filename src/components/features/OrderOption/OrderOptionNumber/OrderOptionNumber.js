import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption/OrderOption.scss';


const OrderOptionNumber = ({currentValue, setOptionValue, limits}) => {
  return (
    <div className={styles.number}>
      <input type="number" className={styles.inputSmall} value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)}/>
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};

export default OrderOptionNumber;
