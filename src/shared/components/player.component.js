import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SongAuthor, SongTitle } from '../../features/home/components/song-card.component';
import { defaultSong } from '../containers/layout.container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { OfflineContext } from '../../services/offline/offline.context';

const PlayerContainer = styled.div`
  display: grid;
  width: 40vw;
  height: 18vh;
  grid-template-columns: 18vh 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  background-color: #ffffff;
  border-radius: 10px 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

const PlayerCover = styled.figure`
  margin: 0;
  width: 100%;
  height: 100%;
  grid-columns: 1 / 2;
  grid-rows: 1 / 2;
`

const PlayerCoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayerDetails = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 10px 10px 0px;
  grid-columns: 2 / 3;
  grid-rows: 1 / 2;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.colors.text.light};
  color: ${props => props.theme.colors.text.primary};
  align-self: flex-end;
  cursor: pointer;
`;

export default function Player({ song = defaultSong, hidePlayer }) {
  const [ currentSong, setCurrentSong ] = useState(song);
  const { online } = useContext(OfflineContext);

  useEffect(() => {
    setCurrentSong({...song});
  }, [song]);

  return (
    <PlayerContainer>
      <PlayerCover>
        {
          online ? 
          <PlayerCoverImg src={currentSong.cover.online} alt="song_cover" /> :
          <PlayerCoverImg src={currentSong.cover.offline} alt="song_cover" />
        }
      </PlayerCover>
      <PlayerDetails>
        <CloseButton onClick={hidePlayer}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <SongTitle>{currentSong.title}</SongTitle>
        <SongAuthor>{currentSong.author}</SongAuthor>
        <br />
        {
          online ? 
          <audio controls src={song.uri.online}></audio> :
          <audio controls src={song.uri.offline}></audio>
        }
      </PlayerDetails>
    </PlayerContainer>
  );
}

Player.propTypes = {
  song: PropTypes.object,
  hidePlayer: PropTypes.func.isRequired
}
