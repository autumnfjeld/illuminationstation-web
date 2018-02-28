// Externals
import React, { Component }  from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactInterval from 'react-interval';

// App constants
import {moods} from '../../static/constants.js';

// Styled Component
const StyledText = styled.p`
  color: white;
  font-size: 1.6rem;
  background: transparent;
  border: none;
  line-height: 1.2;
  margin-top: 50px;
  outline:none;
  padding: 0.1em;
  transition: width 2s ease-in-out;
  width: ${props =>  props.width};
  will-change: width;
`;
// Constants
const promptTexts = {
    waiting: {
        text: 'Tell me how you\'re feeling',
        speech: 'Tell me how you\'re feeling',
        // moodPrompts: moods,
        moodPrompts: {
            'party':    'Let\'s party!',
            'soothing': 'I\'ve had a rough day.',
            'artic':    'It\'s sooo hot outside.',
            'neutral': 'I\'m feelin\' fine.'
        }
    },
    working: 'Cool. IlluminationStation at your service.',
    responding: `Here's something <insert mood> for you.`
};

class PromptText extends Component {
    constructor(props) {
        console.log('PropmtTextComponent   props.appStatus', props.appStatus);
        super(props);
        this.state = {
            enabled: true,
            timeout: 4000,
            count: 0,
            promptLead: 'Try typing:  ',
            text: promptTexts[props.appStatus],
        }
        if (props.appStatus === 'waiting') {
            this.state.text = promptTexts[props.appStatus][props.currentInput];
        }
        if (props.currentInput === 'voice') this.setState({promptLead: 'Try saying: '});
        this.intervalCallback = this.intervalCallback.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.appStatus !== nextProps.appStatus){
            // console.log('props.appStatus', this.props.appStatus, 'nextProps', nextProps.appStatus);
            if (nextProps.appStatus === 'waiting') {
                this.setState({text: promptTexts[nextProps.appStatus][nextProps.currentInput]});
            } else {
                this.setState({text: promptTexts[nextProps.appStatus]});
            }
        }
    }

    intervalCallback() {
        // console.log('intervalCallback', this.state.count, Object.keys(moods).length, this.state.text);
        // console.log('Object.values(promptTexts.waiting.moodPrompts) ', Object.values(promptTexts.waiting.moodPrompts))
        let promptText = this.state.promptLead + Object.values(promptTexts.waiting.moodPrompts)[this.state.count];
        this.setState({text: promptText});
        // console.log('text',moods[this.state.count], promptTexts.waiting.moodPrompts[moods[this.state.count]]);
        this.setState({count: (this.state.count === Object.keys(moods).length - 1 ? 0 : this.state.count + 1)});
    }

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
    render() {
        const {timeout, enabled} = this.state;
        return (
            <div>
                <ReactInterval {...{timeout, enabled}}
                    callback={this.intervalCallback}
                />
                <StyledText> {this.state.text} </StyledText>
            </div>
        )
    }
};

PromptText.propTypes = {
    currentInput: PropTypes.string.isRequired,
    appStatus: PropTypes.string.isRequired
};

export default PromptText;
