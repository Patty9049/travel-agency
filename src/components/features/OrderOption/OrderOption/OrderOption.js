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

const OrderOption = () => {
  const {name, type /*, id, setOrderOption*/} = this.props;
  const OptionComponent = {};
  console.log('OptionComponent', OptionComponent);
  console.log('OptionComponent this.props', this.props);

  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        {/* <OptionComponent /> */}
        <div key={optionTypes[type]}
          //setOptionValue={value => setOrderOption({[id]: value})}
          //props={this.props}
        >
        </div>
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