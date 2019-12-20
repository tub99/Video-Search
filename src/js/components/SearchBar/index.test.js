import React from 'react';
import App from '.';
import SearchBar from '../SearchBar';

import { stub } from 'sinon';


describe('<Search />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SearchBar />);
    });

    it('should render searchbar successfully', () => {
        expect(wrapper).toBeTruthy();
    });

    describe('Searching for a keyword', () => {
        it('should search for a keyword called agile when user searches for agile', () => {
            const onSearchClick = jest.fn();
            const wrapper = mount(<SearchBar handleSubmit={onSearchClick}></SearchBar>)
            expect(wrapper.find("SearchBar")).toBeDefined();
            wrapper.find("SearchBar").prop('handleSubmit')('agile');
            expect(onSearchClick.mock.calls.length).toEqual(1);
            expect(onSearchClick).toHaveBeenCalledWith('agile');
        });

        it('should update Search Keyword to agile when search is made with agile', ()=>{
            wrapper.find('.search-input').simulate('change', {target: {value: 'agile'}});
            expect(wrapper.instance().state.keyword).toBe('agile');
        });
    });
});
