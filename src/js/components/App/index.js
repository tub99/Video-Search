import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import VideoList from '../VideoList';
import youtubeAPI, { defaultParams } from '../../api/youtube';

import './index.css';
class App extends Component {


  constructor() {
    super();
    this.state = {
      videos: [],
      nextPageToken: "",
      pageInfo: {},
      hasMore: true
    }
  }

  handleSearch = async (keyword) => {
    const videoResp = await youtubeAPI.get('/search', {
      params: {
        ...defaultParams,
        q: keyword
      }
    });

    this.setState({
      videos: videoResp.data.items,
      nextPageToken: videoResp.data.nextPageToken,
      pageInfo: videoResp.data.pageInfo,
      searchKeyword: keyword
    });
  }

  handleEOPReach = async () => {
    const { searchKeyword, nextPageToken, videos } = this.state;
    const resp = await youtubeAPI.get('/search', {
      params: {
        ...defaultParams,
        q: searchKeyword,
        pageToken: nextPageToken
      }
    })

    this.setState({
      videos: [...videos, ...resp.data.items],
      nextPageToken: resp.data.nextPageToken,
      hasMore: this.state.pageInfo.totalResults - videos.length > 0 ? true : false
    })

  }

  render() {
    const { videos, hasMore } = this.state;
    return (
      <div className="App" >
        <header className="App-header">
          <SearchBar handleSubmit={this.handleSearch} />
        </header>
        <VideoList videoData={videos} />
       
      </div>
    );
  }

}

export default App;
