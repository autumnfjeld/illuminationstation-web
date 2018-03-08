// Externals
import React from "react";
import PropTypes from "prop-types";

// Styled Component
import StyledText from '../StyledText';

const ResponseText = (props) => {
    // Only show response for set number of seconds or TODO until user interacts with appState
    window.setTimeout(props.reset, 12000);
    return (
        <StyledText width="400px"> {props.responseText} </StyledText>
    );
}

ResponseText.propTypes = {
    responseText: PropTypes.string
};

ResponseText.defaultProps = {
    responseText: ''
}

export default ResponseText;
