import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import youtube from '../apis/youtube';
import CardData from './CardData';

class SearchBar extends Component {
  state = {
    term: '',
    data: [],
    secretApproved: '',
    secretClick: false,
    finalTest: false,
  };

  onInputChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  onButtonClick = async () => {
    if (
      this.props.onDropDown !== 'flora芙蘿拉' &&
      this.props.onDropDown !== null
    ) {
      let respond = await youtube.get('/search', {
        params: {
          q: this.state.term,
          maxResults: 15,
          order: `${this.props.onDropDown}`,
        },
      });

      this.setState({
        data: respond.data.items,
      });
    } else if (this.props.onDropDown == 'flora芙蘿拉') {
      let respond = await youtube.get('/search', {
        params: {
          channelId: 'UCuwY9m7KrbU6fEHSjrTDB5w',
          maxResults: 15,
        },
      });

      this.setState({
        data: respond.data.items,
      });
    } else {
      let respond = await youtube.get('/search', {
        params: {
          q: this.state.term,
          maxResults: 15,
        },
      });

      this.setState({
        data: respond.data.items,
      });
    }
    console.log(this.state.term);
  };

  onSecretChange = () => {
    return (
      <div>
        <input
          className="m-3"
          placeholder="hints: type in four numbers"
          onChange={
            (event) =>
              this.setState({
                secretApproved: event.target.value,
              })

            // event.target.value === '1111'
            //   ? this.setState({ secretApproved: true })
            //   : null
          }
        />
        <Button onClick={this.onSecretClick}>click here</Button>
      </div>
    );
  };

  onSecretClick = () => {
    if (this.state.secretApproved == '1111') {
      return this.setState({
        secretClick: true,
      });
    } else console.log('secretApproved', this.state.secretApproved);
  };

  handleSecretClick = (event) => {
    let newEvent = event.target.value.trim().toLowerCase();
    console.log(newEvent);
    if (newEvent === 'i love you') {
      console.log('hi');
      fetch = async () => {
        let respond = await youtube.get('/search', {
          params: {
            channelId: 'UCuwY9m7KrbU6fEHSjrTDB5w',
            maxResults: 15,
          },
        });

        this.setState({
          data: respond.data.items,
        });
        console.log(this.state.data);
      };
      fetch();
    } else {
      return null;
    }
  };

  onFinalChange = () => {
    return (
      <div>
        <input
          className="m-3"
          placeholder="hints: type in the magic words"
          onChange={
            (event) => this.handleSecretClick(event)

            // event.target.value ===
            //   ? this.setState({ secretApproved: true })
            //   : null
          }
        />
        <Button onClick={this.handleSecretClick}>click here</Button>
      </div>
    );
  };

  // onSecretClick2 = () => {
  //   if (this.state.secretApproved == '1111') {
  //     return this.setState({
  //       secretClick: true,
  //     });
  //   } else console.log('secretApproved', this.state.secretApproved);
  // };

  render() {
    return (
      <>
        <input
          style={{ width: '50vw', height: '40px' }}
          className="m-3"
          type="text"
          placeholder="type something.."
          onChange={this.onInputChange}
        />
        <div>
          {this.props.onDropDown == 'flora芙蘿拉'
            ? this.onSecretChange()
            : null}
        </div>
        <div>{this.state.secretClick ? this.onFinalChange() : null}</div>
        <Button onClick={this.onButtonClick}>video</Button>
        <CardData props={this.state.data} />
      </>
    );
  }
}

export default SearchBar;
