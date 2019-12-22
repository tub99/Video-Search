import React from 'react';
import VideoList from '.';
import InfiniteScroll from '../InfiniteScroll';


describe('<Video List />', () => {
  let wrapper;
  const videos = [{ id: 'vid1', url: 'vid1.com' }, { id: 'vid2', url: 'vid2.com' }]
  beforeEach(() => {
    wrapper = shallow(<VideoList videoData={videos} />);
  });

  it('should render successfully', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have default videoData', () => {
    expect(VideoList.defaultProps.videoData).toBeDefined();
  });

  describe('HTML rendering', () => {
    it('should render Video conatiners', () => {
      expect(wrapper.find('.list-container')).toBeDefined();
      expect(wrapper.find('.list-container').length).toBe(1);
    });
  });

  describe('Default Props', () => {
    expect(VideoList.defaultProps.videoData).toStrictEqual([]);
  });
});
