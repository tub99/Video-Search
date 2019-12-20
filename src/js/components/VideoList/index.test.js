import React from 'react';
import VideoList from '.';


describe('<Video List />', () => {
  let wrapper;
  const videos= [{id: 'vid1', url:'vid1.com'},{id: 'vid2', url:'vid2.com'}]
  beforeEach(() => {
    wrapper = shallow(<VideoList videoData={videos}  />);
  });
  it('should check component instance', () => {
    expect(wrapper).toBeTruthy();
  });
  describe('HTML rendering', () => {
    it('should render Video conatiners', () => {
      expect(wrapper.find('.list-container')).toBeDefined();
      expect(wrapper.find('.list-container').length).toBe(1);
    });
  });
});
