import React from 'react';
import App from '.';
import SearchBar from '../SearchBar';
import mockAxios from "axios";

import { stub } from 'sinon';


describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('should render successfully', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render app search header', () => {
    expect(wrapper.find('.App-header')).toBeDefined();
  });
  describe('<Search/>', () => {
    it('should search for a keyword called agile and make sure the search is called', () => {
      const onSearchClick = stub();
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: { results: ["cat.jpg"] }
        })
      );
      expect(wrapper.find("SearchBar")).toBeDefined();
      console.log('Search Call', wrapper.find("SearchBar").prop('handleSubmit')('agile'));
      expect(mockAxios.get).toHaveBeenCalledTimes(1);

      //expect(onSearchClick.callCount).to.be.equal(1);
    });
  });
});
