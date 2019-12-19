import React from 'react';
import App from '.';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('should render successfully', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render app header', () => {
    expect(wrapper.find('.App-header')).toBeDefined();
  });
});
