//Externals
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

// components
import Icon from '../Icon';

// Styles
const StyledFlexButton = styled(Flex)`
    cursor: pointer;
    width: ${props => props.isActive ? '60px' : '40px'};
    margin: 0 10px;
    transition: width .25s ease-in-out;
    will-change: width;
`;

const NavButton = (props) => {
    let color = props.isActive ? 'hsl(0,0%,100%)' : 'hsl(0,0%,95%)';

    const onClick = () => {
        props.handleInputStateChange(props.inputType);
    }

    return (
        <StyledFlexButton contentCenter isActive={props.isActive} onClick={onClick}>
            <Icon filename={props.inputType} color={color}/>
        </StyledFlexButton>
    );
}

NavButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  inputType: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

NavButton.defaultProps = {
  isActive: false,
  onClick: () => {},
  color: 'hsl(0,0%,95%)',
};

export default NavButton;
