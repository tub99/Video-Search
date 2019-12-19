import React from 'react';
import App from '.';
import SearchBar from '../SearchBar';

import { stub } from 'sinon';


describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });
  it('should render successfully', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<Search/>', () => {
    it('should search for a keyword called agile and make sure the search is called', () => {
      const onSearchClick = stub();
      const wrapper = mount(<SearchBar handleSubmit={onSearchClick}></SearchBar>)
      expect(wrapper.find("SearchBar")).toBeDefined();
      wrapper.find("SearchBar").prop('handleSubmit')('agile');
      expect(onSearchClick.callCount).toEqual(1);
    });
  });
});
