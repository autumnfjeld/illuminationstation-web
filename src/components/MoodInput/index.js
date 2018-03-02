// Externals
import React from "react";
// import PropTypes from "prop-types";
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
  transition: width 2s ease-in-out;
  width: ${props =>  props.width};
  will-change: width;
`;

class MoodInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '' ,
          inputWidth: '4px'
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getMoodFromPhrase = this.getMoodFromPhrase.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.setState({inputWidth: '300px'}), 0);
    }

    handleInputChange(event) {
      this.setState({value: event.target.value});
    }

    getMoodFromPhrase(phrase){
        // if (!phrase) return;
        const foundKeyword = Object.keys(moodKeywords).find( (keyword) => {
            return phrase.toLowerCase().indexOf(keyword) !== -1;
        });
        // console.log('foundKeyword', foundKeyword);
        return moodKeywords[foundKeyword];

    }

    handleSubmit(event) {
      this.props.onInputChange(this.getMoodFromPhrase(this.state.value));
      this.setState({value: ''});
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
                    autoFocus
                />
            </form>
        )
    }
}

export default MoodInput
