import styled from 'styled-components';

/**
 * It represents the title of a section in the application.
 */
export const SectionTitle = styled.h2`
  font-size: 1.8vmax;
  font-weight: bold;
  color: ${props => props.theme.colors.text.primary};
`