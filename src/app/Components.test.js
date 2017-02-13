/*Unit Test cases*/
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RootComponent  from './RootComponent';
import MenuItem  from './MenuItemComponent';
import DisplayDetails  from './DisplayDetailsComponent';


describe('Root Component', () => {
  it('length should be one', () => {
    const wrapper = shallow(<RootComponent />);
    expect(wrapper).to.have.length(1);
  });
  it('should contains MenuItem as a child component', () => {
    const wrapper = shallow(<MenuItem />);
    expect(wrapper).to.have.length(1);
  });
  it('should contains DisplayDetails as a child component', () => {
    const wrapper = shallow(<DisplayDetails />);
    expect(wrapper).to.have.length(1);
  });
});

describe('MenuItem Component', () => {
  it('should contains six menu item components and component should wrap with <ul> classname menuitem', () => {
    const wrapper = shallow(<RootComponent><MenuItem /></RootComponent>);
    expect(wrapper.find('ul.menuitem').children()).to.have.length(6);
  });
  it('should render with text', () => {
    const wrapper = shallow(<MenuItem />);
    expect(wrapper.find('li.active').exists()).to.be.true;
  });
});

describe('DisplayDetails Component', () => {
  it('should wrap with <div> classname details', () => {
    const wrapper = shallow(<RootComponent><DisplayDetails /></RootComponent>);
    expect(wrapper.find('div.details').children()).to.have.length(2);
  });
  it('should contains header on top', () => {
    const wrapper = shallow(<RootComponent />);
    expect(wrapper.find('h3').exists()).to.be.true;
  });
  it('should render with text', () => {
    const wrapper = shallow(<DisplayDetails />);
    expect(wrapper.find('span.detailsdata').exists()).to.be.true;
  });
});

describe('When user clicked on menu item:', () => {
  it('should be clicked', () => {
    const wrapper = shallow(<div><ul class="menuitem"><li class="active">lambeosaurus</li></ul></div>);
    wrapper.simulate('click');
    const wrapper1 = shallow(<h3 class="headings">lambeosaurus</h3>);
    expect(wrapper1.text()).to.equal('lambeosaurus');
  }); 
  it('details component should get updated', () => {
    const wrapper = shallow(<span class="detailsdata">appeared : -76000000</span>);
    expect(wrapper.text()).to.equal('appeared : -76000000');
  });
});
