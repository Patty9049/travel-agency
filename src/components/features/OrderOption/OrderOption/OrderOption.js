import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import OrderOptionDropdown from '../OrderOptionDropdown/OrderOptionDropdown';
import OrderOptionIcons from '../OrderOptionIcons/OrderOptionIcons';
import OrderOptionNumber from '../OrderOptionNumber/OrderOptionNumber';
import OrderOptionCheckboxes from '../OrderOptionCheckboxes/OrderOptionCheckboxes';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

const OrderOption = ({name, type, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>NAME{name}</h3>
        <OptionComponent
          {...otherProps}
        />
      </div>
    );
  }
};
console.log('name', {name});
OrderOption.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  name: PropTypes.string,
};

export default OrderOption;