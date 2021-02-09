import React from 'react';
import styles from '../OrderOption/OrderOption.scss';
import formatPrice from '../../../../utils/parseTrips';

const OrderOptionDropdown = () => {
  const {values, required, currentValue, setOptionValue} = this.props;
  return (
    <select
      className={styles.dropdown}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
      {required ? '' : (
        <option key='null' value=''>---</option>
      )}
      {values.map(value => (
        <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
      ))}
    </select>
  );
};

export default OrderOptionDropdown;
