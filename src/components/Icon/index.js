import React from 'react';
import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSVG = styled(SVG)`
    svg {
        height: 100%;
        width: 100%;
    }
    g {
        stroke: ${props => props.color};
    }
`;

const Icon = props => (
    <StyledSVG color={props.color} src={require(`../../static/${props.filename}.svg`)} />
);

Icon.propTypes = {
    filename: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    color: '#dbdbdb',
};

export default Icon;
