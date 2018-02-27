// Externals
import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

// Styles
const StyledInput = styled.input`
  color: white;
  background: transparent;
  border: none;
  border-bottom: 3px solid white;
  line-height: 1.2;
  margin: 0.5em;
  outline:none;
  padding: 0.1em;
  transition: width 2s ease-in-out;
  width: ${props =>  props.width};
  will-change: width;
`;

class MoodInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: '' , inputWidth: '4px', go: false };

      this.inputChangeHandler = this.inputChangeHandler.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.setState({inputWidth: '300px', go: true}), 0);
    }

    inputChangeHandler(event) {
      this.setState({value: event.target.value});
    }

    submitHandler(event) {
      this.props.onInputChange(this.state.value);
      this.setState({value: ''});
      event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <StyledInput
                    width={this.state.inputWidth}
                    go={this.state.go}
                    value={this.state.value}
                    onChange={this.inputChangeHandler}
                    autoFocus
                />
            </form>
        )
    }
}

export default MoodInput
