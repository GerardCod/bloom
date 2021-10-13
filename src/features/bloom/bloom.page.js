import React from 'react';
import styled from 'styled-components';
import waves from '../../assets/img/waves.svg';
import image from '../../assets/img/android-icon-192x192.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const BloomContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;

const BloomCover = styled.figure`
  margin: 0;
`

const BloomTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const BloomImageCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BloomName = styled.div`
  width: 50%;
  height: 40vh;
  display: flex;
  align-items: center;
`;

const AppImage = styled.img`
  height: 100%;
  width: 40vh;
  object-fit: cover
`

const AppName = styled.h1`
  font-weight: bold;
  font-size: 5vmax;
  color: ${props => props.theme.colors.text.primary};
`;

const BeginButton = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text.light};
  padding: 1rem;
  border-top-left-radius: 25% 50%;
  border-top-right-radius: 25% 50%;
  border-bottom-right-radius: 25% 50%;
  border-bottom-left-radius: 25% 50%;
  background-color: ${props => props.theme.colors.ui.primary};
  display: flex;
`;

const BeginButtonText = styled.span`
  margin-right: 10px;
  font-size: 1rem;
`;

const BeginButtonIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
`;

export default function BloomPage() {
  return (
    <BloomContainer>
      <BloomTitle>
        <BloomName>
          <AppImage src={image} alt="app_image" />
          <AppName>Bloom</AppName>
        </BloomName>
        <h2>Tu reproductor de confianza</h2>
        <BeginButton to="/browse/home">
          <BeginButtonText>Iniciar</BeginButtonText>
          <BeginButtonIcon icon={faAngleRight} />
        </BeginButton>
      </BloomTitle>
      <BloomCover>
        <BloomImageCover src={waves} />
      </BloomCover>
    </BloomContainer>
  );
}