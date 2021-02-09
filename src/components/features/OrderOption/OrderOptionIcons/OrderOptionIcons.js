import React from 'react';
import styles from '../OrderOption/OrderOption.scss';
import formatPrice from '../../../../utils/parseTrips';

const OrderOptionIcons = () => {
  const {values, setOptionValue} = this.props;
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

export default OrderOptionIcons;
