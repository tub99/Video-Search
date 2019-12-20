import React, { Component } from 'react';
import debounce from "lodash.debounce";

class InifiniteScroll extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            hasMore: true,
            endOfPageReached: false
        }
    }


    componentDidMount() {
        const { handleEOPReach } = this.props;
        window.onscroll = debounce(() => {
            if (window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight) {
                this.setState({ endOfPageReached: true, isLoading: true });
                handleEOPReach();
            }
        }, 100);
    }
    render() {
        
        return (<></>);
    }

}

export default InifiniteScroll;