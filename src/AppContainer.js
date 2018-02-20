// Externals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Components
import MoodContainer from "./components/MoodContainer/index.jsx";

// App constants
import {controllerUrl, moods, inputStates, appStates} from './static/constants.js';


// React Component Definition
class App extends Component {
    constructor(props) {
      console.log('IlluminationStation App got props', props);
      super(props);
      this.state = {
          // Text could be prompt or response -> appState is either waitingForUser, working, or responding
          text: {
              voice: 'Listening',
              text: 'Type something'
          },
          // Given appStates at loadtime
          currentInput: 'text',
          currentStatus: 'working',
          currentMood: 'neutral'
      }

      this.fetchMood = this.fetchMood.bind(this);
      this.handleInputStateChange = this.handleInputStateChange.bind(this);
  }

  componentDidMount() {
      console.log('App ComponentDidMount');
      this.fetchMood();
  }

  fetchMood() {
      axios.get(controllerUrl + '/getstate')
      .then( (res) => {
          console.log('res.data', res.data);
          this.setState({currentMood: res.data.mood})
      })
      .catch( (err) => {
          console.log('error', err);
      });
  }

  // TODO change to verb
  moodChangeHandler(value) {
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

  handleInputStateChange(value) {
      console.log('handleInputStateChange', value);
      this.setState({currentInput: value});
  }

  render() {
    return <MoodContainer
                moodChangeHandler={this.moodChangeHandler}
                handleInputStateChange={this.handleInputStateChange}
                hand
                mood={this.state.currentMood}
                text={this.state.text}
                inputState={this.state.currentInput}
            />
  }
}

App.propTypes = {
    currentInput: PropTypes.oneOf(Object.keys(inputStates)).isRequired,
    currentMood: PropTypes.oneOf(Object.keys(moods)).isRequired,
    currentStatus: PropTypes.oneOf(Object.keys(appStates)).isRequired
};

export default App;
