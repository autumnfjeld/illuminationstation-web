// Externals
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex, { FlexItem } from 'styled-flex-component';
import ToggleDisplay from 'react-toggle-display';

// Components
import MoodInput from '../MoodInput';
// import NavButtons from '../NavButtons';
import PromptText from '../PromptText';
import ResponseText from '../ResponseText';
import StyledText from '../StyledText';

// Styles
import BackgroundSpheres from '../../utils/background-sphere.js';

const StyledContainer = styled.div`
    background-image: ${props => props.backgroundImage};
    background-color: ${props => props.backgroundColor};
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
    constructor(props) {
        super(props);
        this.state = {
            uiPrompt: 'Type your mood ...',
            backgroundImage: null,
            backgroundColor: 'hsl(0, 100%, 100%);',
            showWelcomeText: true,
            showPrompt: true,
            // Show oops message on mood-not-found
            showOops: false
        }
        this.toggleOops = this.toggleOops.bind(this);
    }

    componentDidMount() {
        console.log('this.state.showWelcomeText', this.state.showWelcomeText);
        setTimeout( () => this.setState({showWelcomeText: false}), 8000);
    }

    componentWillReceiveProps(nextProps) {
        // console.log('MoodContainter.componentWillReceiveProps nextProps.mood', nextProps.mood);
        let bs = new BackgroundSpheres(nextProps.mood);
        this.setState({backgroundColor:bs.backgroundColor, backgroundImage: bs.getBackgroundImage()})
        if (this.props.responseText !== nextProps.responseText) {
            // Change to responseText instead of prompt
            this.setState({showPrompt: false});
        }
    }

    toggleOops(bool) {
        console.log('toggleOops', this.state.showOops);
        this.setState({showOops: bool});
    }

    render() {
        return (
            <StyledContainer backgroundImage={this.state.backgroundImage} backgroundColor={this.state.backgroundColor}>
                <FlexItem  basis="50%">
                    <Flex column full alignCenter justifyEnd>
                        <MoodInput
                            currentInput={this.props.currentInput}
                            onInputChange={this.props.handleMoodChange}
                            // toggleOops={()=>this.setState({showOops: !this.state.showOops})}
                            toggleOops={this.toggleOops}
                            showOops={this.state.showOops}
                            />
                    </Flex>
                </FlexItem>
                <FlexItem grow="1">
                    <Flex column full alignCenter justifyStart>
                        <ToggleDisplay show={this.state.showWelcomeText}>
                            <FlexItem basis="300px">
                                <StyledText opacity="1">
                                    Welcome to Lumi.
                                    <br />
                                    Tell us how you're feeling and we'll provide a mood to match.
                                </StyledText>
                            </FlexItem>
                        </ToggleDisplay>
                        <ToggleDisplay show={!this.state.showWelcomeText}>
                            {
                                this.state.showPrompt ?
                                <PromptText
                                    showOops={this.state.showOops}
                                    currentInput={this.props.currentInput}
                                    appStatus={this.props.currentStatus}
                                /> :
                                <ResponseText responseText={this.props.responseText} reset={()=>this.setState({showPrompt:true})} />
                            }

                        </ToggleDisplay>
                    </Flex>
                </FlexItem>
                <FlexItem basis="30%">
                    <Flex column full alignCenter justifyCenter>
                        {/* <NavButtons
                            handleInputStateChange={this.props.handleInputStateChange}
                            currentInput={this.props.currentInput}
                         /> */}
                    </Flex>
                </FlexItem>
                {/* <small>Mood: {this.props.mood} </small>
                <small>Input State: {this.props.currentInput} </small>
                <small>appStatus: {this.props.currentStatus} </small> */}
            </StyledContainer>
        )
    }
}

MoodContainer.propTypes = {
  mood: PropTypes.string.isRequired,
  currentInput: PropTypes.string.isRequired,
  handleMoodChange: PropTypes.func.isRequired,
  handleInputStateChange: PropTypes.func.isRequired,
};

export default MoodContainer;
