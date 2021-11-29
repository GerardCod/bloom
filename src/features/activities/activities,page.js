import React, { useContext, useEffect } from 'react';
import { SectionTitle } from '../../shared/components/section-title.component';
import ActivityCard from './components/activity.component';
import styled from 'styled-components';
import { TracksContext } from '../../services/tracks/tracks.context';
import { SongsContainer, NotFoundContainer } from '../home/home.page';
import SongCard from '../home/components/song-card.component';
import PropTypes from 'prop-types';
import ResetButton from '../../shared/components/reset-button.component';

const ActivitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function ActivitiesPage({ playSong }) {
  const { state, searchTracksByTask, resetResults, fetchActivities } = useContext(TracksContext);

  useEffect(() => {
    fetchActivities();
  }, [ fetchActivities ]);


  return (
    <>
      {
        !state.searchingByTask &&
        <div>
          <SectionTitle>¿Qué quieres realizar?</SectionTitle>
          <ActivitiesContainer>
            {
              state.activities?.map(activity => <ActivityCard activity={activity} key={`activity-id: ${activity.id}`} onClick={searchTracksByTask} />)
            }
          </ActivitiesContainer>
        </div>
      }

      {
        (state.searchingByTask && state.tracksFound?.length > 0) &&
        <div>
          <ResetButton onClick={resetResults} />
          <SectionTitle>Recomendaciones</SectionTitle>
          <SongsContainer wrap="wrap">
            {
              state.tracksFound?.map(song => <SongCard song={song} playSong={playSong} key={`song-id: ${song.id}`} />)
            }
          </SongsContainer>
        </div>
      }

      {
        (state.searchingByTask && (!state.tracksFound || state.tracksFound?.length === 0)) &&
        <div>
          <ResetButton onClick={resetResults} />
          <NotFoundContainer>
            <h3>No se encontraron resultados.</h3>
          </NotFoundContainer>
        </div>
      }
    </>
  );
}

ActivitiesPage.propTypes = {
  playSong: PropTypes.func.isRequired,
}