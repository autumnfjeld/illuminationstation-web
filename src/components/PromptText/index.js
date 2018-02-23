// Externals
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Styles
const StyledText = styled.p`
  color: white;
  font-size: 14px;
  background: transparent;
  border: none;
  line-height: 1.2;
  margin: 0.5em;
  outline:none;
  padding: 0.1em;
  transition: width 2s ease-in-out;
  width: ${props =>  props.width};
  will-change: width;
`;
let mood;
// Constants
const promptTexts = {
    waiting: {
        text: 'Type your mood',
        speech: 'Tell me how you are feeling',
        moodPrompts: {
            'party':    'Let\'s party!',
            'soothing': 'I\'ve had a rough day.',
            'artic':    'It\'s sooo hot outside.'
        }
    },
    working: 'Cool. IlluminationStation at your service.',
    responding: `Found some ${mood} lights for you.`
};

const PromptText = props => {
    let prompt = promptTexts[props.appStatus];
    if (props.appStatus === 'waiting') {
        prompt = promptTexts[props.appStatus][props.currentInput];
    }
    console.log('prompt', prompt);
    // switch(props.appStatus) {
    //     case 'waiting':
    //         prompt = promptTexts[props.appStatus][props.inputState];
    //         break;
    //     case 'working':
    //         prompt = promptTexts[props.appStatus];
    //         break;
    //     case 'responding':
    //         break;
    //     default
    //         prompt = null;
    // }
    return <StyledText> {prompt} </StyledText>
};
PromptText.propTypes = {
    // mood: PropTypes.string.isRequired,
    currentInput: PropTypes.string.isRequired,
    appStatus: PropTypes.string.isRequired
};

export default PromptText;
