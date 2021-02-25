import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption/OrderOption.scss';
import { formatPrice } from '../../../../utils/parseTrips';

const OrderOptionIcons = (props) => {
  const { values, setOptionValue, currentValue } = props;
  console.log('props ORDER OPTION VALUE', props);
  console.log('props ORDER OPTION VALUESSSSS', values);
  return (
    <div className={styles.icon}>
      {values.map((value) => {
        console.log(value.id, currentValue);
        return (
          <div
            className={
              value.id === currentValue ? styles.iconActive : styles.icon
            }
            key={value.id}
            onClick={() => setOptionValue(value.id)}
          >
            {value.name} ({formatPrice(value.price)})
          </div>
        );
      })}
    </div>
  );
};

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.number,
};

export default OrderOptionIcons;
//styles.iconActive={currentValue => event.currentTarget.value.id = currentValue}
//{values.filter(value=>value.id == value.currentValue)}
// event.currentTarget.value.id
//className={styles.iconActive=(value.id == value.currentValue)}  //<----???
