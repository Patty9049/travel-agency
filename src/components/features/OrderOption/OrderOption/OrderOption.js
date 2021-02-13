import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import OrderOptionDropdown from '../OrderOptionDropdown/OrderOptionDropdownContainer';
import OrderOptionIcons from '../OrderOptionIcons/OrderOptionsIconsContainer';
import OrderOptionNumber from '../OrderOptionNumber/OrderOptionNumberContainer';
import OrderOptionCheckboxes from '../OrderOptionCheckboxes/OrderOptionCheckboxContainer';
import OrderOptionText from '../OrderOptionText/OrderOptionTextContainer';
import OrderOptionDate from '../OrderOptionDate/OrderOptionDateContainer';


const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  number: OrderOptionNumber,
  checkboxes: OrderOptionCheckboxes,
  text: OrderOptionText,
  date: OrderOptionDate,
};

const OrderOption = (props) => {
  const {id, name, type, setOrderOption, ...otherProps} = props;
  console.log('odrer option PROPS', props);
  const OptionComponent = optionTypes[type];
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