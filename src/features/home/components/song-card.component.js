import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FlexContainer } from '../../../shared/containers/flex.container';
import { OfflineContext } from '../../../services/offline/offline.context';

const SongCover = styled.figure`
  margin: 0;
  width: ${props => props.theme.sizes.cards};
  height: ${props => props.theme.sizes.cards};
  border-radius: 10px 10px;
  overflow: hidden;
`;

const SongCoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SongTitle = styled.h3`
  font-size: 1.25vmax;
  font-weight: bold;
  margin-bottom: 2px;
  margin-top: 2px;
`;

export const SongAuthor = styled.span`
  font-size: 1vmax;
`;

const SongDetails = styled(FlexContainer)`
  padding: 1rem;
  width: 100%;
  padding-top: 0.5rem;
`;

const PlayButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.ui.primary};
  border-radius: 50%;
  color: ${props => props.theme.colors.text.light};}
  display: none;
  border: none;
  cursor: pointer;
`

const SongContainer = styled.article`
  width: ${props => props.theme.sizes.cards};
  height: auto;
  margin: 0 1rem 1rem 0;
  flex-shrink: 1;
  border-radius: 10px 10px;

  &:hover ${PlayButton} {
    display: block
  }

  &:hover {
    background-color: ${props => props.theme.colors.text.light};
  }
`;

export default function SongCard({ song, playSong }) {
  const { online } = useContext(OfflineContext);

  function startSong() {
    playSong(song);
  }

  return (
    <>
      <SongContainer>
        <SongCover>
          {
            online ?
            <SongCoverImg src={song.cover.online} /> :
            <SongCoverImg src={song.cover.offline} />
          }
        </SongCover>
        <SongDetails content="space-between" items="center">
          <div>
            <SongTitle>{song.title}</SongTitle>
            <SongAuthor>{song.author}</SongAuthor>
          </div>
          <PlayButton onClick={startSong}>
            <FontAwesomeIcon icon={faPlay} />
          </PlayButton>
        </SongDetails>
      </SongContainer>
    </>
  );
};

SongCard.propTypes = {
  song: PropTypes.object.isRequired,
  playSong: PropTypes.func.isRequired
}
