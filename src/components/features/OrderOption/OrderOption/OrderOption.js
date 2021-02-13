import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import OrderOptionDropdown from '../OrderOptionDropdown/OrderOptionDropdownContainer';
import OrderOptionIcons from '../OrderOptionIcons/OrderOptionsIconsContainer';
import OrderOptionNumber from '../OrderOptionNumber/OrderOptionNumberContainer';
import OrderOptionCheckboxes from '../OrderOptionCheckboxes/OrderOptionCheckboxContainer';


const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  number: OrderOptionNumber,
  checkboxes: OrderOptionCheckboxes,
};

const OrderOption = (props) => {
  const {id, name, type, setOrderOption, ...otherProps} = props;
  console.log('odrer option PROPS', props);
  const OptionComponent = optionTypes[type];
  console.log('otherProps', otherProps);
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
          setOptionValue={value => setOrderOption({[id]: value})}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOption;