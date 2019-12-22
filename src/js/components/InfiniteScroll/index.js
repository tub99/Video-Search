import React, { Component } from 'react';
import debounce from "lodash.debounce";
import PropTypes from 'prop-types';

class InfiniteScroll extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { handleEOPReach } = this.props;
        window.onscroll = debounce(() => {
            if (window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight) {
                handleEOPReach();
            }
        }, 100);
    }
    render() {

        return (<></>);
    }

}

InfiniteScroll.propTypes = {
    handleEOPReach: PropTypes.func
}
InfiniteScroll.defaultProps = {
    handleEOPReach: () => null
}
export default InfiniteScroll;