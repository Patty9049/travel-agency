import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = (props) => {
  const { id, setOptionValue } = props;
  return (
    <input type="text" value={id} onChange={event => setOptionValue(event.currentTarget.value)}/>
  );
};

OrderOptionText.propTypes = {
  id: PropTypes.string,
  setOptionValue: PropTypes.func,
};


export default OrderOptionText;
