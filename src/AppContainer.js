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
      // console.log('IlluminationStation App got props', props);
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
          currentMood: 'neutral',
          responseText: null
      }

      this.fetchMood = this.fetchMood.bind(this);
      this.handleMoodChange = this.handleMoodChange.bind(this);
      this.handleInputStateChange = this.handleInputStateChange.bind(this);
      // this.clearResponse = this.clearResponse.bind(this);
  }

  componentDidMount() {
      // console.log('App ComponentDidMount. current mood', this.state.currentMood);
      this.fetchMood();
  }

  fetchMood() {
      axios.get(controllerUrl + '/getstate')
          .then( (res) => {
              // console.log('Got mood.  res.data.mood=', res.data.mood);
              this.setState({currentMood: res.data.mood, currentStatus: 'waiting'});
          })
          .catch( (err) => {
              console.log('error', err);
          });
  }

  handleMoodChange(value) {
      this.setState({currentStatus: 'working'});
      // console.log('AppContainer.handleMoodChange', value);
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
      console.log('handleInputStateChange', value);
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
                // clearResponse={()=>this.setState({responseText:null})}
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
