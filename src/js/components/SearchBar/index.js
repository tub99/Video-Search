import React, { Component } from 'react';
import './index.css';

class SearchBar extends Component {

    state = {
        keyword: ''
    };
    constructor() {
        super();
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.keyword);
    };

    onChange = (event) => {
        this.setState({ keyword: event.target.value })
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.onSubmit} className="search-form">
                    <label style={{display:'none'}} htmlFor="video-search">Video Search</label>
                    <input placeholder="Search" onChange={this.onChange} className="search-input" name="video-search" type="text" />
                    <button className="submit"></button>
                </form>
            </div>    
        )
    }
}

export default SearchBar;