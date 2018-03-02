// Externals
import React from "react";
import PropTypes from "prop-types";

// Styled Component
import StyledText from '../StyledText';

const ResponseText = (props) => {
    // Only show response for 8 seconds or until user interacts with appState
    // window.setTimeout(() => props.showPrompt = true, 3000);
    // console.log('****** props', props);
    window.setTimeout(props.reset, 10000);
    return (
        <StyledText> {props.responseText} </StyledText>
    );
}

ResponseText.propTypes = {
    // showPrompt: PropTypes.bool.isRequired,
    responseText: PropTypes.string
};

ResponseText.defaultProps = {
    responseText: ''
}

export default ResponseText;
