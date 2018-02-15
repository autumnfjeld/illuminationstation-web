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
      this.state = { value: '' };

      // React ES6 does not bind 'this' to event handlers by default
      this.inputChangeHandler = this.inputChangeHandler.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
    }

    inputChangeHandler(event) {
      this.setState({value: event.target.value});
    }

    submitHandler(event) {
      this.props.onInputChange(this.state.value);
      event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <Input
                    value={this.state.value}
                    onChange={this.inputChangeHandler}
                />
            </form>
        )
    }
}


export default MoodInput
