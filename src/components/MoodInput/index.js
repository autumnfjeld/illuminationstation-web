// Externals
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// constants
import {moodKeywords} from '../../static/constants.js';
// Styles
const StyledInput = styled.input`
  color: white;
  background: transparent;
  border: none;
  border-bottom: 3px solid white;
  font-size: 2rem;
  line-height: 1.2;
  margin: 1.2em;
  outline:none;
  padding: 0.2em;
  text-align: center;
  transition: width 2s ease-in-out;
  width: ${props =>  props.width};
  will-change: width;
`;

class MoodInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '' ,
          inputWidth: '4px',
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getMoodFromPhrase = this.getMoodFromPhrase.bind(this);
      this.resetStuff = this.resetStuff.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.setState({inputWidth: '300px'}), 0);
    }

    // onFocus() {
    resetStuff () {
        console.log('MoodInput.resetStuff');
        if (this.props.showOops) {
            this.setState({value: ''});
            this.props.toggleOops(false);
        }
        // this.props.toggleOops(false);
    }

    handleInputChange(event) {
        // Make sure showOops is set to false
        if (this.props.showOops) this.props.toggleOops(false);
        this.setState({value: event.target.value});
    }

    // TODO make filter more sophisticated, for instance differentiate between ok and stoked
    getMoodFromPhrase(phrase){
        const foundKeyword = Object.keys(moodKeywords).find( (keyword) => {
            return phrase.toLowerCase().indexOf(keyword) !== -1;
        });
        // console.log('MoodInput foundKeyword', foundKeyword);
        return moodKeywords[foundKeyword];
    }

    handleSubmit(event) {
      // console.log('MoodInput value', this.state.value);
      const moodFromPhrase = this.getMoodFromPhrase(this.state.value);
      // console.log('MoodInput moodFromPhrase', moodFromPhrase);
      if (moodFromPhrase) {
          this.props.onInputChange(moodFromPhrase);
          this.setState({value: ''});
      } else {
          this.props.onInputChange('oops');
          console.log('MoodInput.handleSubmit() showOops!!!   ', this.props);
          this.props.toggleOops(true);
      }
      event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <StyledInput
                    width={this.state.inputWidth}
                    go={this.state.go}
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    onClick={this.resetStuff}
                    autoFocus
                />
            </form>
        )
    }
}

MoodInput.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    // showOops: PropTypes.bool.isRequired
};

export default MoodInput
