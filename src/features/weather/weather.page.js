import React, { useContext, useEffect } from 'react';
import { TracksContext } from '../../services/tracks/tracks.context';
import { SectionTitle } from '../../shared/components/section-title.component';
import { SongsContainer } from '../home/home.page';
import SongCard from '../home/components/song-card.component';
import PropTypes from 'prop-types';
import { WeatherContext } from '../../services/weather/weather.context';

export default function WeatherPage({ playSong }) {
  const { state, searchByWeather } = useContext(TracksContext);
  const { getCurrentWeather } = useContext(WeatherContext);
  
  useEffect(() => {
    getCurrentWeather().then(weather => {
      searchByWeather(weather);
    }).catch(console.error);

  }, [getCurrentWeather, searchByWeather]);

  return (
    <>
      <SectionTitle>Recomendaciones por clima</SectionTitle>
      <SongsContainer wrap="wrap">
        {
          state.tracksFound?.map(song => <SongCard song={song} playSong={playSong} key={`song-id: ${song.id}`} />)
        }
      </SongsContainer>
    </>
  );
}

WeatherPage.propTypes = {
  playSong: PropTypes.func.isRequired,
}