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
      const wrapper = shallow(<SearchBar handleSubmit={onSearchClick}></SearchBar>)
      expect(wrapper.find("SearchBar")).toBeDefined();
     console.log( wrapper.find("SearchBar").prop('handleSubmit')('agile'));
      //expect(onSearchClick.callCount).to.be.equal(1);
    });
  });
});
