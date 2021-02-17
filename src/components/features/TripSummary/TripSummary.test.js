import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const tags = [];
    const component = shallow(<TripSummary titleText='Lorem ipsum' imageSrc='image.jpg' tags={tags}/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct title and image', () => {
    const expectedTitle = '';
    const expectedImage = 'image.jpg';
    const tags = [];
    const mySrc = expectedImage;
    const component = shallow(<TripSummary /*titleText={expectedTitle}*/ imageSrc={expectedImage} tags={tags}/>);
    const renderedTitle = component.find('h3').text();
    console.log('rendered title', renderedTitle);
    expect(renderedTitle).toEqual(expectedTitle);
    expect(mySrc).toEqual(expectedImage);
  });

  it('renders correct classNames', () => {
    // const mockVariants = 'small dummy';
    // const component = shallow(<TripSummary titleText='Lorem' imageSrc='image.jpg' variant={mockVariants} />);
    // expect(component.hasClass('component')).toBe(true);
    // expect(component.hasClass('small')).toBe(true);
    // expect(component.hasClass('dummy')).toBe(true);
  });
});
