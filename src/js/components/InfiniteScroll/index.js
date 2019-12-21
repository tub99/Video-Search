import React, { Component } from 'react';
import debounce from "lodash.debounce";

class InifiniteScroll extends Component {

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

export default InifiniteScroll;