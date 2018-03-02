
import styled from "styled-components";

const StyledText = styled.p`
  color: white;
  font-size: 1.6rem;
  background: transparent;
  line-height: 1.2;
  margin-top: .5em;
  outline:none;
  opacity: ${props => props.opacity ? props.opacity : 1};
  padding: 0.1em;
  text-align: center;
  transition: opacity 2s ease-in-out;
  ${'' /* width: ${props =>  props.width}; */}
  will-change: opacity;
`;

export default StyledText;
