// Externals
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import MoodContainer from "./components/MoodContainer/index.jsx";

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
          // mood: party, soothing
          mood: 'party',
          // Text could be prompt or response -> appState is either waitingForUser, working, or responding
          text: {

              voice: 'Listening',
              text: 'Type something'
          }
      }
  }

  moodChangeHandler(value) {
      // Make POST to change lightbulb
      console.log('moodChangeHandler', value);
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
