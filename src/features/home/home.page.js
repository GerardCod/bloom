import React, { useEffect, useContext } from 'react';
import { SectionTitle } from '../../shared/components/section-title.component';
import Search from './components/search.component';
import styled from 'styled-components';
import { FlexContainer } from '../../shared/containers/flex.container';
import SongCard from './components/song-card.component';
import PropTypes from 'prop-types';
import { TracksContext } from '../../services/tracks/tracks.context';
import ResetButton from '../../shared/components/reset-button.component';

export const SongsContainer = styled(FlexContainer)`
  width: 100%;
  height: auto;
`;

export const NotFoundContainer = styled(FlexContainer)`
  width: 100%;
  height: 50vh;
`;

export default function HomePage({ playSong }) {
  const { state, fetchData, resetResults } = useContext(TracksContext);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Search />
      {
        !state.searching && state.data?.categories?.map((category, idx) => {
          return (
            <div key={`section-id: ${idx}`}>
              <SectionTitle>{ category.name }</SectionTitle>
              <SongsContainer wrap="wrap" content="flex-start">
                {
                  category.songs.map((song) => <SongCard key={`song-id: ${song.id}`} song={song} playSong={playSong} />)
                }
              </SongsContainer>
            </div>
          );
        })
      }

      {
        (state.searching && state.tracksFound?.length > 0) &&
        <div>
          <ResetButton onClick={resetResults} />
          <SectionTitle>Resultados</SectionTitle>
          <SongsContainer wrap="wrap" content="flex-start"> 
            {
              state.tracksFound?.map(song => <SongCard key={`song-id: ${song.id}`} song={song} playSong={playSong} />)
            }
          </SongsContainer>
        </div>
      }

      {
        (state.searching && state.tracksFound?.length === 0) &&
        <NotFoundContainer content="center" items="center">
          <h3>No se encontraron resultados</h3>
        </NotFoundContainer>
      }
    </>
  );  
}

HomePage.propTypes = {
  playSong: PropTypes.func.isRequired
}