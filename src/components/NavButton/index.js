// Externals
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import Img from 'react-image'

// components
import Icon from '../Icon';
// SVGs
// import speechBtnSvg from '../../static/speech.svg';
// import textBtnSvg from '../../static/text.svg';

// Styles
const StyledButton = styled.div`
      align-items: center;
      cursor: pointer;
      display: flex;
      height: 70px;
      justify-content: space-between;
      width: 60px;
      max-width: 100px;
      padding: 0 20px 0 30px;
`;

const NavButton = (props) => {
    console.log('NavButton props', props);

    const onClick = () => {
        // isActive should be changed as a result of currentInput changing
        console.log('props.isActive', props.isActive);
        console.log('props.type', props.type);
        // props.isActive = !props.isActive;
        props.handleInputStateChange(props.type);
    }

    return (
        <StyledButton onClick={onClick}>
        <p> {props.isActive} </p>
            <Icon filename={props.type} isActive={props.isActive} stroke="#333" width={500} />
        </StyledButton>
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
};

export default NavButton;
