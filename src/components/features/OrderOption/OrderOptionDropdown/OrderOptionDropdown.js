import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption/OrderOption.scss';
import formatPrice from '../../../../utils/parseTrips';

const OrderOptionDropdown = (props) => {
  console.log('DROP PROPS', props);
  const {values, required, currentValue, setOptionValue} = props;
  console.log('values', values);
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
        <option key={value.id} value={value.id}>{value.name} (value.price)</option>
      ))}
    </select>
  );
};

export default OrderOptionDropdown;
