import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSVG = styled(SVG)`
    svg {
        width: ${props => props.isActive ? 100 : 50};
        height: ${props => props.height};
    }
    g {
        stroke: ${props => props.stroke};
    }
`;

const Icon = props => (
    <StyledSVG src={require(`../../static/${props.filename}.svg`)} />
);

Icon.propTypes = {
    height: PropTypes.number,
    filename: PropTypes.string.isRequired,
    stroke: PropTypes.string,
    width: PropTypes.number,
};

Icon.defaultProps = {
    height: 200,
    stroke: '#FFF',
    width: 100,
};

export default Icon;
