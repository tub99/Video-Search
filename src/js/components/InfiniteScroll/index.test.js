import React from 'react';
import InifiniteScroll from '../InfiniteScroll';

import { stub } from 'sinon';


describe('<InifiniteScroll />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<InifiniteScroll />);
    });

    it('should render searchbar successfully', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should call handleEOPReach when user has reached end of page', () => {
        const handleEOPReach = jest.fn();
        wrapper = mount(<InifiniteScroll handleEOPReach={handleEOPReach} />);
        window.innerHeight = document.documentElement.scrollTop; // mock scroll to end of page
        window.onscroll();
        expect(handleEOPReach).toHaveBeenCalledTimes(1);
    })
});