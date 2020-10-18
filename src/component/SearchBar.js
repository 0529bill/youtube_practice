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
    password: '',
    onFlora: false,
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
          maxResults: 5,
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
          maxResults: 5,
        },
      });

      this.setState({
        data: respond.data.items,
      });
    } else {
      let respond = await youtube.get('/search', {
        params: {
          q: this.state.term,
          maxResults: 5,
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
                onFlora: true,
                data: [],
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
      return (
        alert('Good job babe! you got one more to go!'),
        this.setState({
          secretClick: true,
        })
      );
    } else console.log('secretApproved', this.state.secretApproved);
  };

  handleSecretClick = () => {
    // let newEvent = event.target.value.trim().toLowerCase();
    // console.log(newEvent);
    if (this.state.password === 'i love you') {
      alert('Awwwwww!  love you too!');
      fetch = async () => {
        let respond = await youtube.get('/search', {
          params: {
            channelId: 'UCuwY9m7KrbU6fEHSjrTDB5w',
            maxResults: 5,
          },
        });

        this.setState({
          data: respond.data.items,
        });
      };
      fetch();
    } else {
      return alert('try again babe');
    }
  };

  onFinalChange = () => {
    return (
      <div>
        <input
          className="m-3"
          placeholder="type in the magic words"
          onChange={
            (event) =>
              this.setState({
                password: event.target.value.trim().toLowerCase(),
              })

            // event.target.value ===
            //   ? this.setState({ secretApproved: true })
            //   : null
          }
        />
        <Button onClick={this.handleSecretClick}>click here</Button>
      </div>
    );
  };

  render() {
    return (
      <>
        <div>
          {this.props.onDropDown == 'flora芙蘿拉' ? null : (
            <input
              style={{ width: '50vw', height: '40px' }}
              className="m-3"
              type="text"
              placeholder="type something.."
              onChange={this.onInputChange}
            />
          )}
          {this.props.onDropDown == 'flora芙蘿拉' ? null : (
            <Button onClick={this.onButtonClick}>video</Button>
          )}
        </div>
        <div>
          {this.props.onDropDown == 'flora芙蘿拉'
            ? this.onSecretChange()
            : null}
        </div>
        <div>{this.state.secretClick ? this.onFinalChange() : null}</div>

        <CardData props={this.state.data} />
      </>
    );
  }
}

export default SearchBar;
