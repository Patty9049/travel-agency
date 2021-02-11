import {connect} from 'react-redux';
import OrderOptionDropdown from './OrderOptionDropdown';
import {getOrderOptions, setOrderOption, getOrder} from '../../../../redux/orderRedux';

const mapStateToProps = (state) => {
  const options = getOrderOptions(state);
  const order = getOrder(state);
  return {
    options: options,
    order: order,
  };
};

const mapDispatchToProps = dispatch => ({
  setOrderOption: value => dispatch(setOrderOption(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderOptionDropdown);