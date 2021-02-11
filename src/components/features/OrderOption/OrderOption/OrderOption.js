import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import setOrderOption from '../../../../redux/orderRedux';
import OrderOptionDropdown from '../OrderOptionDropdown/OrderOptionDropdownContainer';
// import OrderOptionIcons from '../OrderOptionIcons/OrderOptionIcons';
// import OrderOptionNumber from '../OrderOptionNumber/OrderOptionNumber';
// import OrderOptionCheckboxes from '../OrderOptionCheckboxes/OrderOptionCheckboxes';


const optionTypes = {
  dropdown: OrderOptionDropdown,
  // icons: OrderOptionIcons,
  // checkboxes: OrderOptionCheckboxes,
  // number: OrderOptionNumber,
};

const OrderOption = (props) => {
  const {id, name, type, ...otherProps} = props;
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