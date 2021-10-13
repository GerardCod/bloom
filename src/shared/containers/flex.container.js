import styled from 'styled-components';
import PropTypes from 'prop-types';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  flex-wrap: ${props => props.wrap ? props.wrap : 'no-wrap'};
  align-items: ${props => props.items ? props.items : 'stretch'};
  justify-content: ${props => props.content ? props.content : 'flex-start'};
`

FlexContainer.propTypes = {
  direction: PropTypes.string,
  wrap: PropTypes.bool,
  items: PropTypes.string,
  content: PropTypes.string,
}

export const FlexItem = styled.div`
  align-self: ${props => props.alignSelf ? props.alignSelf : 'stretch'};
  width: 100%;
`;