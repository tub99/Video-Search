import React from 'react';
import InfiniteScroll from '../InfiniteScroll';



describe('<InfiniteScroll />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<InfiniteScroll />);
    });

    it('should render searchbar successfully', () => {
        expect(wrapper).toBeTruthy();
    });

    it('should have default handleEOPReach', () => {
        expect(InfiniteScroll.defaultProps.handleEOPReach).toBeDefined();
    });

    it('should call handleEOPReach when user has reached end of page', () => {
        const handleEOPReach = jest.fn();
        wrapper = mount(<InfiniteScroll handleEOPReach={handleEOPReach} />);
        window.innerHeight = document.documentElement.scrollTop; // mock scroll to end of page
        window.onscroll();
        expect(handleEOPReach).toHaveBeenCalledTimes(1);
    });

    describe('Default Props', ()=>{
        expect(InfiniteScroll.defaultProps.handleEOPReach()).toBe(null);
    });
});