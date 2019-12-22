import React from 'react';
import Spinner from '.';

describe('<Spinner />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Spinner />);
    });

    it('should render spinner successfully', () => {
        expect(wrapper).toBeTruthy();
        expect(wrapper.find('img').length).toBe(1);
    });

    describe('Default Props', ()=>{
        expect(Spinner.defaultProps.src).toStrictEqual({});
    });
});