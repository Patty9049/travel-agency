import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const name = 'name';
    const title = 'title';
    // const component = shallow(<OrderOption className={type} type={types.drop} name={name} title={title}/>);
    const component = shallow(<OrderOption name={name} title={title}/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
    console.log(typeof(component));
  });

  it('should return empty object if called without required props', () => {
    const name = 'name';
    const type = 'type';
    const component = shallow(<OrderOption name={name} type={type}/>);
    expect(component).toEqual({});
    console.log(component.props());
  });

  it('should render prop name in title', () => {
    const id = 'ID';
    const type = 'comptype';
    const name = 'compname';
    const title = 'comptitle';
    const OptionComponent = type;
    const component = shallow(<OrderOption id={id} OptionComponent={OptionComponent} type={type} name={name} title={title}/>);
    console.log(component.debug());
    // expect(component.find('.title')).toEqual(name);
    // expect(component.find('.title')).equals('name');
    // console.log(component.find('.title'));
    console.log(component.find('h3'));
    console.log(component.find('.component'));
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

console.log('testValue', testValue);
console.log('testValueNumber', testValueNumber);

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    console.log('type', type);
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption; /* 1 */
    console.log('renderedSubcomponent', renderedSubcomponent);


    beforeEach(() => {
      mockSetOrderOption = jest.fn(); /* 2 */
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption} /* 3 */
          className={type}
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(type);
      console.log('SUBCOMPONENT', subcomponent);
      console.log('TYPE', type);
      console.log('{...mockProps}', {...mockProps});
      // renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */             //do zrobienia
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
    }
  });
}