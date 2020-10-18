import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import videos from '../apis/video';
import { Container, Button } from 'react-bootstrap';
import Dropdowns from './Dropdowns';

class App extends Component {
  state = {
    dropdownStatus: null,
  };
  // onTermSubmit = async (term) => {
  //   let videoData = await youtube.get('/search', {
  //     params: {
  //       q: term,
  //       order: 'videocount',
  //     },
  //   });
  //   console.log(videoData);
  // };
  //passing data from child to parents

  onVideoSubmit = async () => {
    let videodata = await videos.get('/videos', {
      params: {
        chart: 'mostPopular',
        regionCode: 'US',
      },
    });
    console.log(videodata);
  };

  onDropDown = (value) => {
    this.setState({
      dropdownStatus: value,
    });
  };

  render() {
    return (
      <div className="">
        <Container fluid className="justify-content-center">
          <h1 style={{ fontFamily: 'Roboto Condensed' }} className="m-3">
            YoutubeSearch
          </h1>
          <Dropdowns onDropDown={this.onDropDown} />
          <p>
            hints: after you click sorting button, you have to click 'video'
            button
          </p>
          <SearchBar onDropDown={this.state.dropdownStatus} />
        </Container>
      </div>
    );
  }
}

export default App;
