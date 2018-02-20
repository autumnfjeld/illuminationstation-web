// Externals
import React from "react";
import PropTypes from "prop-types";

// components
import Flex from 'styled-flex-component';
import NavButton from '../NavButton';

// App constants
import {inputStates} from '../../static/constants.js';

const NavButtons = (props) => {
    console.log('NavButtons inputStates', Object.keys(inputStates));
    const buttons = Object.keys(inputStates).map( (type, i) =>
        <NavButton
            key={i}
            type={type}
            isActive={type === props.currentInput}
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
