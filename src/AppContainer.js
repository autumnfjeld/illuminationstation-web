// Externals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Components
import MoodContainer from "./components/MoodContainer/index.jsx";

// App constants
const controllerUrl = "http://59.100.235.250:9800";

// React Component Definition
class App extends Component {
    static propType = {
        interfaceType: PropTypes.string.isRequired,
        mood: PropTypes.string.isRequired,
    }

    constructor(props) {
      console.log('IlluminationStation App got props', props);
      super(props);
      this.state = {
          // appState: waiting, working, responding
          appStatus: '',
          // voice, text, button
          interfaceType: 'text',
          // mood: none, party, soothing
          mood: 'party',
          // Text could be prompt or response -> appState is either waitingForUser, working, or responding
          text: {
              voice: 'Listening',
              text: 'Type something'
          }
      }
      this.fetchMood = this.fetchMood.bind(this);
  }

  componentDidMount() {
      console.log('App ComponentDidMount');
      this.fetchMood();
  }

  fetchMood() {
      axios.get(controllerUrl + '/getstate')
      .then( (res) => {
          console.log('res.data', res.data);
          this.setState({mood: res.data.mood})
      })
      .catch( (err) => {
          console.log('error', err);
      });
  }

  moodChangeHandler(value) {
      // Make POST to change lightbulb
      console.log('moodChangeHandler', value);
      const reqBody = {mood: value};
      axios.post(controllerUrl, reqBody)
          .then( (res) => {
              console.log('res data', res.data);
          })
          .catch( (err) => {
              console.log('error', err);
          });
  }

  render() {
    return <MoodContainer
            moodChangeHandler={this.moodChangeHandler}
            mood={this.state.mood}
            text={this.state.text}
            userInterfaceType={this.state.interfaceType}
            />
  }
}

export default App;
