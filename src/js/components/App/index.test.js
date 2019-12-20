import React from 'react';
import App from '.';
import mockAxios from "axios";


describe('<App />', () => {
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
      await wrapper.find("SearchBar").prop('handleSubmit')('cat');
      expect(wrapper.instance().state.searchKeyword).toBe('cat');
      expect(wrapper.instance().state.videos.length).toBe(2);
      expect(wrapper.instance().state.videos[0]).toBe('white cat');
    });
  });

});
