import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const ButtonContainer = styled.button`
  padding: 10px;
  background-color: ${props => props.theme.colors.ui.primary};
  border-top-left-radius: 10% 20%;
  border-top-right-radius: 10% 20%;
  border-bottom-left-radius: 10% 20%;
  border-bottom-right-radius: 10% 20%;
  margin-bottom: 1rem;
  display: flex;
  cursor: pointer;
  color: ${props => props.theme.colors.text.light};
  align-items: center;
`;

const IconButton = styled(FontAwesomeIcon)`
  font-size: .9rem;
  margin-right: 1rem;
  `;

const IconText = styled.span`
  font-size: .9rem;
`;

export default function ResetButton({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <IconButton icon={faAngleLeft} />
      <IconText>Regresar</IconText>
    </ButtonContainer>
  );
}

ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};