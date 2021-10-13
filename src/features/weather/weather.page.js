import React, { useContext } from 'react';
import { TracksContext } from '../../services/tracks/tracks.context';
import { SectionTitle } from '../../shared/components/section-title.component';
import { SongsContainer } from '../home/home.page';
import SongCard from '../home/components/song-card.component';
import PropTypes from 'prop-types';

export default function WeatherPage({ playSong }) {
  const { state } = useContext(TracksContext);
  
  return (
    <>
      <SectionTitle>Recomendaciones por clima</SectionTitle>
      <SongsContainer wrap="wrap">
        {
          state.data?.categories[0].songs.map(song => <SongCard song={song} key={`song-id: ${song.id}`} playSong={playSong} />)
        }
      </SongsContainer>
    </>
  );
}

WeatherPage.propTypes = {
  playSong: PropTypes.func.isRequired,
}