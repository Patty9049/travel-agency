import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption/OrderOption.scss';
import {formatPrice} from '../../../../utils/parseTrips';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = (props) => {
  const {values,  currentValue, setOptionValue} = props;
  console.log('props ODRER OPTION CHCECKBOX', props);
  console.log('currentValue ODRER OPTION CHCECKBOX', currentValue);
  return (
    <div className={styles.checkboxes}>
      {values.map(value => (
        <label
          key={value.id}
        >
          <input type="checkbox" value={value.id} onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))} checked={currentValue.indexOf(value.id) > -1}/>
          {value.name} ({formatPrice(value.price)})
        </label>
      ))}
    </div>
  );
};

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;
// checked={filters.tags.indexOf(tag) > -1}
// checked={currentValue.indexOf(value) > -1}