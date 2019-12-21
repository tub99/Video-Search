import React from 'react';
import App from '.';
import mockAxios from "axios";


describe.only('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('should render successfully', () => {
    expect(wrapper).toBeTruthy();
  });
  describe('HTML rendering', () => {
    it('should render app search header', () => {
      expect(wrapper.find('.App-header')).toBeDefined();
    });
  });

  describe('Searching', () => {
    it('should search for cat videos if user searches for cat keyword', async () => {
      const getRequest = mockAxios.create().get;
      getRequest.mockImplementationOnce(() =>
        Promise.resolve({
          data: { items: ['white cat', 'black cat'] }
        })
      );
      await wrapper.find('SearchBar').prop('handleSubmit')('cat');
      expect(wrapper.instance().state.searchKeyword).toBe('cat');
      expect(wrapper.instance().state.videos.length).toBe(2);
      expect(wrapper.instance().state.videos[0]).toBe('white cat');
    });
  });

  describe('InifiniteScroll', () => {
    beforeEach(async() => {
      const getRequest = mockAxios.create().get;
      getRequest.mockImplementationOnce(() =>
        Promise.resolve({
          data: { items: ['white cat', 'black cat'] }
        })
      );
      // number of videos before scroll
      wrapper.instance().setState({ videos: ["video 1", "video 2"] });
      
    })
    it('should fetch more videos when user scrolls down to end of page', async () => {
      await wrapper.find('InifiniteScroll').prop('handleEOPReach')();
      expect(wrapper.instance().state.videos.length).toBe(4);
      expect(wrapper.instance().state.videos[3]).toBe('black cat');
    });

    describe('Spinner', () => {
      it('should load Spinner', () => {
        wrapper.instance().setState({ isLoading: true });
        expect(wrapper.find('Spinner').length).toBe(1);

      });
      it('should remove spinner when user scrolls down and videos have loaded', async() => {
        await wrapper.find('InifiniteScroll').prop('handleEOPReach')();
        expect(wrapper.instance().state.isLoading).toBeFalsy();
        expect(wrapper.find('Spinner').length).toBe(0);
      });

    });
  });

});
