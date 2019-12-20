import React from 'react';
import VideoItem from '.';


describe('<Video Item />', () => {
  let wrapper;
  const video = {
    snippet: {
        title: 'Video Title',
        channelTitle: 'My Channel',
        description: 'This is a description',
        thumbnails: {
            medium:{
                url:''
            },
            default:{
                url: ''
            }

        }
    }
  };
  beforeEach(() => {
    wrapper = shallow(<VideoItem video={video} />);
  });
  it('should check component instance', () => {
    expect(wrapper).toBeTruthy();
  });
  describe('HTML rendering', () => {
    it('should render Video conatiners', () => {
      expect(wrapper.find('.video-item')).toBeDefined();
      expect(wrapper.find('.video-item').length).toBe(1);
    });

    it('should check video contents', () => {
        expect(wrapper.find('.video-title').text()).toBe('Video Title');
        expect(wrapper.find('.video-item').length).toBe(1);
      });
  });
});
