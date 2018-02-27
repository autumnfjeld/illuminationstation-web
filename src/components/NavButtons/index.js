// Externals
import React from "react";
import PropTypes from "prop-types";

// components
import Flex from 'styled-flex-component';
import NavButton from '../NavButton';

// App constants
import {inputStates} from '../../static/constants.js';

const NavButtons = (props) => {
    // console.log('NavButtons inputStates', Object.keys(inputStates), props.currentInput);
    const buttons = Object.keys(inputStates).map( (inputType, i) =>
        <NavButton
            key={i}
            inputType={inputType}
            isActive={inputType === props.currentInput}
            handleInputStateChange={props.handleInputStateChange}
        />
    );
    return (
        <Flex row full alignCenter justifyCenter>
            {buttons}
        </Flex>
    );
}

NavButtons.propTypes = {
  buttonTypes: PropTypes.array
};

NavButtons.defaultProps = {
    buttonTypes: ['text', 'speech']
};

export default NavButtons;
