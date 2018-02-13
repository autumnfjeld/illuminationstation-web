// Externals
import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

// Styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

class MoodInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: 'Party' };

      // React ES6 does not bind 'this' to event handlers by default
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input
                value={this.state.value}
                onChange={this.handleInputChange} />
            </form>
        )
    }
}


export default MoodInput
