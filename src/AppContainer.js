// Externals
import React, { Component } from 'react';

// Components
import MoodContainer from "./components/MoodContainer/index.jsx";

// React Component Definition
class App extends Component {
    constructor(props) {
      console.log('IlluminationStation App got props', props);
      super(props);
      this.state = {
          mood: 'party'
      }
  }

  render() {
    return <MoodContainer mood={this.state.mood} />
  }
}

export default App;
