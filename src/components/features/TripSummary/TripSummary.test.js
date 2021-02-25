import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const id = 'ID';
    const image = 'IMG';
    const name = 'TOGO';
    const cost = '400';
    const days = 9;
    const tags = ['beach', 'spa', 'childfriendly'];
    const component = shallow(<TripSummary id={id}  image={image} name={name} cost={cost} days={days} titleText='Lorem ipsum' imageSrc='image.jpg' tags={tags}/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct Link, img and props', () => {
    const tags = ['beach', 'spa', 'childfriendly'];
    const id = 'ID';
    const image = 'undefined';
    const name = 'undefined';
    const cost = '400';
    const days = 9;
    const expectedTo = `/trip/${id}`;
    const correctSrc = 'undefined';
    const correctAlt = 'undefined';
    const component = shallow(<TripSummary id={id} image={image} name={name} cost={cost} days={days} tags={tags}/>);
    expect(component.find('.link').prop('to')).toEqual(expectedTo);
    expect(component.find('img').prop('src')).toEqual(correctSrc);
    expect(component.find('img').prop('alt')).toEqual(correctAlt);

  });

  it('renders correct tags', () => {

    const tags = ['beach', 'spa', 'childfriendly'];
    const tag1 = tags[0];
    const tag2 = tags[1];
    const tag3 = tags[2];
    console.log('TAG1', tag1);
    console.log('TAG2', tag2);
    console.log('TAG3', tag3);
    const tag1el = `<span className="tag">${tags[0]}</span>`;
    const tag2el = `<span className="tag">${tags[1]}</span>`;
    const tag3el = `<span className="tag">${tags[2]}</span>`;
    console.log('tag1el', tag1el);
    console.log('tag2el', tag2el);
    console.log('tag3el', tag3el);
    const id = 'ID';
    const image = 'undefined';
    const name = 'TOGO';
    const cost = '400';
    const days = 9;
    const component = shallow(<TripSummary id={id} image={image} name={name} cost={cost} days={days} tags={tags}/>);
    console.log(component.debug());
    expect(component.find('.tag').at(0).prop('children')).toEqual(tag1);
    expect(component.find('.tag').at(1).prop('children')).toEqual(tag2);
    expect(component.find('.tag').at(2).prop('children')).toEqual(tag3);
    expect(component.find('.tags').prop()).toEqual(tags.tag1el);
    expect(component.find('.tags').prop()).toEqual(tags.tag2el);
    expect(component.find('.tags').prop()).toEqual(tags.tag3el);

  });

  it('if array tags doesnt exixst or is empty div className=tags doesnt exist.', () => {
    const tags = [];
    const id = 'undefined';
    const image = 'undefined';
    const name = 'undefined';
    const cost = 'undefined';
    const days = 9;
    const component = shallow(<TripSummary id={id} image={image} name={name} cost={cost} days={days} tags={tags}/>);
    console.log(component.debug());
    expect(component.exists('.tags')).toEqual(false);
  });

  it('if array tags contain min 1 tag div className=tags exist.', () => {
    const tags = ['beach', 'spa', 'childfriendly'];
    const id = 'undefined';
    const image = 'undefined';
    const name = 'undefined';
    const cost = 'undefined';
    const days = 9;
    const component = shallow(<TripSummary id={id} image={image} name={name} cost={cost} days={days} tags={tags}/>);
    console.log(component.debug());
    expect(component.exists('.tag')).toEqual(component.exists('.tags'));
  });
});
