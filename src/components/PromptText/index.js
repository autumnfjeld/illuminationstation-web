// Externals
import React, { Component }  from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactInterval from 'react-interval';

// Components
import Flex from 'styled-flex-component';

// App constants
import {moodPrompts, moods} from '../../static/constants.js';

// Styled Component
const StyledText = styled.p`
  color: white;
  font-size: 1.6rem;
  background: transparent;
  border: none;
  line-height: 1.2;
  margin: .5em;
  outline:none;
  transition: width 2s ease-in-out;
  width: ${props =>  props.width};
  will-change: width;
`;
// Constants
const promptTexts = {
    waiting: 'Tell me how you\'re feeling.',
    working: 'IlluminationStation at your service.',
    responding: `Here's something <insert mood> for you.`
};

class PromptText extends Component {
    constructor(props) {
        console.log('props.appStatus', props.appStatus);
        console.log('PropmtTextComponent   moodPrompts[0]', moodPrompts[0]);
        super(props);
        this.state = {
            enabled: true,
            timeout: 4000,
            count: 1,
            promptLead: 'Try typing:  ',
            statusText: promptTexts[props.appStatus],
            textMoodPrompt: moodPrompts[0]
        }
        this.intervalCallback = this.intervalCallback.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('fuck', this.state.textMoodPrompt)
        console.log('PromptText.componentWillReceiveProps nextProps', nextProps);
        if (this.props.appStatus !== nextProps.appStatus){
            console.log('*****', promptTexts[nextProps.appStatus]);
            this.setState({statusText: promptTexts[nextProps.appStatus]});
        }
    }

    intervalCallback() {
        console.log('******intervalCallback', this.state.count, Object.keys(moods).length, this.state.textMoodPrompt);
        // console.log('Object.values(promptTexts.waiting.moodPrompts) ', Object.values(promptTexts.waiting.moodPrompts))
        let promptText = this.state.promptLead + moodPrompts[this.state.count];
        this.setState({textMoodPrompt: promptText});
        // // console.log('text',moods[this.state.count], promptTexts.waiting.moodPrompts[moods[this.state.count]]);
        this.setState({count: (this.state.count === Object.keys(moodPrompts).length - 1 ? 0 : this.state.count + 1)});
    }

    render() {
        const {timeout, enabled} = this.state;
        return (
            <Flex column alignCenter>
                <ReactInterval {...{timeout, enabled}}
                    callback={this.intervalCallback}
                />
                {/* <StyledText> {this.state.statusText} </StyledText> */}
                <StyledText> {this.state.textMoodPrompt} </StyledText>
            </Flex>
        )
    }
};

PromptText.propTypes = {
    currentInput: PropTypes.string.isRequired,
    appStatus: PropTypes.string.isRequired,
    responseText: PropTypes.string.isRequired
};

PromptText.defaultProps = {
    responseText: ''
}

export default PromptText;
