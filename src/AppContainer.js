// Externals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Components
import MoodContainer from "./components/MoodContainer/index.jsx";

// App constants
import {controllerUrl, moods, inputStates, appStates} from './static/constants.js';

// Styles
import './styles';

// React Component Definition
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          text: {
              voice: 'Listening',
              text: 'Type something'
          },
          // Given appStates at loadtime
          currentInput: 'text',
          currentStatus: 'waiting',
          currentMood: 'neutral',
          responseText: null
      }
      this.fetchMood = this.fetchMood.bind(this);
      this.handleMoodChange = this.handleMoodChange.bind(this);
      this.handleInputStateChange = this.handleInputStateChange.bind(this);
  }

  componentDidMount() {
      // console.log('App ComponentDidMount. current mood', this.state.currentMood);
      this.fetchMood();
  }

  fetchMood() {
      // TODO figure out why setting this directly in initial state doesn't work
      this.setState({currentMood: 'neutral', currentStatus: 'waiting'});
      // axios.get(controllerUrl + '/getstate')
      //     .then( (res) => {
      //         console.log('AppContainer.fetchMood() Got mood.  res.data.mood=', res.data.mood);
      //         this.setState({currentMood: res.data.mood, currentStatus: 'waiting'});
      //     })
      //     .catch( (err) => {
      //         console.log('error', err);
      //     });
  }

  handleMoodChange(value) {
      this.setState({currentStatus: 'working'});
      const reqBody = {mood: value};
      axios.post(controllerUrl, reqBody)
          .then( (res) => {
              console.log('Mood changed. res.data.mood=', res.data.mood );
              console.log(' res.data.fulfillmentText=', res.data.fulfillmentText);
              this.setState({
                  currentMood: res.data.mood,
                  responseText: res.data.fulfillmentText,
                  currentStatus:'waiting'
              });
          })
          .catch( (err) => {
              console.log('error', err);
          });
  }

  handleInputStateChange(value) {
      this.setState({currentInput: value});
  }

  render() {
    return <MoodContainer
                handleMoodChange={this.handleMoodChange}
                handleInputStateChange={this.handleInputStateChange}
                hand
                mood={this.state.currentMood}
                text={this.state.text}
                currentInput={this.state.currentInput}
                currentStatus={this.state.currentStatus}
                responseText={this.state.responseText}
            />
  }
}

App.propTypes = {
    currentInput: PropTypes.oneOf(Object.keys(inputStates)).isRequired,
    currentMood: PropTypes.oneOf(Object.keys(moods)).isRequired,
    currentStatus: PropTypes.oneOf(Object.keys(appStates)).isRequired
};

App.defaultProps = {
    currentInput: 'text',
    currentStatus: 'working',
    currentMood: 'neutral'
};

export default App;
