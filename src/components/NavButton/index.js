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
    // console.log('NavButton props', props);
    let color = props.isActive ? '#fff' : '#dbdbdb';

    const onClick = () => {
        props.handleInputStateChange(props.type);
    }

    return (
        <StyledFlexButton contentCenter isActive={props.isActive} onClick={onClick}>
            <Icon filename={props.type} color={color}/>
        </StyledFlexButton>
    );
}

NavButton.propTypes = {
  isActive: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

NavButton.defaultProps = {
  isActive: false,
  onClick: () => {},
  color: '#dbdbdb',
};

export default NavButton;
