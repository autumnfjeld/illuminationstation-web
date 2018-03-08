// Externals
import React, { Component }  from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactInterval from 'react-interval';

// Components
import Flex from 'styled-flex-component';

// App constants
import {moodPrompts} from '../../static/constants.js';

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
        super(props);
        this.state = {
            enabled: true,
            timeout: 4000,
            count: 1,
            statusText: promptTexts[props.appStatus],
            textMoodPrompt: 'Try typing: ' + moodPrompts[0]
        }
        this.intervalCallback = this.intervalCallback.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // console.log('PromptText.componentWillReceiveProps() textMoodPrompt', this.state.textMoodPrompt)
        // console.log('PromptText.componentWillReceiveProps nextProps', nextProps);
        if (this.props.appStatus !== nextProps.appStatus){
            // console.log('PromptText.componentWillReceiveProps() ', promptTexts[nextProps.appStatus]);
            this.setState({statusText: promptTexts[nextProps.appStatus]});
        }
    }

    intervalCallback() {
        const promptText = 'Try typing: ' + moodPrompts[this.state.count];
        this.setState({textMoodPrompt: promptText});
        this.setState({count: (this.state.count === Object.keys(moodPrompts).length - 1 ? 0 : this.state.count + 1)});
    }

    render() {
        const {timeout, enabled} = this.state;
        return (
            <Flex column alignCenter>
                <ReactInterval {...{timeout, enabled}}
                    callback={this.intervalCallback}
                />
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
