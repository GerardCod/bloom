import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-colums: ${props => props.columns};
  grid-template-rows: ${props => props.rows};
  gap: ${props => props.gap};
`