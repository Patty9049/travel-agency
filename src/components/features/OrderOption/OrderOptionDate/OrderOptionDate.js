import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = (props) => {
  const [startDate] = useState(new Date());
  const { setOptionValue } = props;

  return (
    <DatePicker selected={startDate} onChange={date => setOptionValue(date)} />
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
