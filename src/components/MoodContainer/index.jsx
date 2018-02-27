// Externals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

// Components
import Flex, { FlexItem } from 'styled-flex-component';
import MoodInput from "../MoodInput";
import NavButtons from "../NavButtons";
import PromptText from "../PromptText";

// Styles
const backgroundImage =   'radial-gradient(50vw circle at 50vw 0, hsl(3, 57%, 80%), transparent 99%), ' +
                        'radial-gradient(50vw circle at 100vw 0px, hsl(3, 57%, 80%) 20%, transparent 90%),' +
                        'radial-gradient(80vw circle at 0 10vh, hsl(3, 57%, 80%), transparent 60%),  ' +
                        'radial-gradient(80vw circle at 40vw 40vh, hsl(251, 80%, 65%), transparent 30%),' +
                        'radial-gradient(80vw circle at 40vw 90vh, hsl(251, 80%, 65%), transparent 80%),' +
                        'radial-gradient(50vw circle at 0vw 100vh, hsl(251, 80%, 65%), transparent 90%),' +
                        'radial-gradient(200vw circle at 70vw 110vh, hsl(251, 80%, 65%), transparent 50%);'

const StyledContainer = styled.div`
    background-image: ${props => props.backgroundImage};
    background-color: hsl(3, 57%, 80%);
    color: white;
    width: 100vw;
    height: 100vh;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
`;

// React components
class MoodContainer extends Component {

    static PropType = {

    }

    constructor(props) {
        // console.log('backgroundImage', backgroundImage);
        super(props);
        this.state = {
            uiPrompt: 'Type your mood ...'
        }
    }
    // TODO make ui prompts rotating thru mood prompts
    render() {
        return (
            <StyledContainer backgroundImage={backgroundImage}>
                <FlexItem  basis="50%">
                    <Flex column full alignCenter justifyEnd>
                        <MoodInput
                            currentInput={this.props.currentInput}
                            onInputChange={this.props.moodChangeHandler}
                            />
                    </Flex>
                </FlexItem>
                <FlexItem grow="1">
                    <Flex column full alignCenter justifyStart>
                        <PromptText
                            // mood={this.props.mood}
                            currentInput={this.props.currentInput}
                            appStatus={this.props.currentStatus}
                        />
                    </Flex>
                </FlexItem>
                <FlexItem basis="30%">
                    <Flex column full alignCenter justifyCenter>
                        <NavButtons
                            handleInputStateChange={this.props.handleInputStateChange}
                            currentInput={this.props.currentInput}
                         />
                    </Flex>
                </FlexItem>
                <small>Mood: {this.props.mood} </small>
                <small>Input State: {this.props.currentInput} </small>
                <small>appStatus: {this.props.currentStatus} </small>
            </StyledContainer>
        )
    }
}

MoodContainer.propTypes = {
  mood: PropTypes.string.isRequired,
  currentInput: PropTypes.string.isRequired,
  moodChangeHandler: PropTypes.func.isRequired,
  handleInputStateChange: PropTypes.func.isRequired,
};

export default MoodContainer
