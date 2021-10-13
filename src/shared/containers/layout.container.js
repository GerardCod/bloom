import React, { useContext, useEffect, useRef, useState } from 'react';
import { Route, useRouteMatch } from 'react-router';
import styled from 'styled-components';
import HomePage from '../../features/home/home.page';
import Sidenav from '../components/sidenav.component';
import Player from '../components/player.component';
import ActivitiesPage from '../../features/activities/activities,page';
import WeatherPage from '../../features/weather/weather.page';
import { OfflineContext } from '../../services/offline/offline.context';

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 10px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const SideMenu = styled.nav`
  background-color: ${props => props.theme.colors.ui.primary};
  grid-column: 1 / 4;
  grid-row: 1 / 9;
  padding: 1rem;
`
const Content = styled.main`
  background-color: #ffffff;
  grid-column: 4 / 17;
  grid-row: 1 / 9;
  padding: 1vmax;
  padding-top: 4vmax;
  overflow-y: scroll;
`;

const PlayerBox = styled.div`
  position: fixed;
  bottom: 10vh;
  right: 20vw;
  transition-property: left;
  transition-duration: 500ms;
`;

export const defaultSong = {
  id: 1238564,
  cover: {
    online: 'https://images.genius.com/7ab2b3d22d577b9fd68544ad23c97eb6.336x336x1.jpg',
    offline: 'assets/covers/Fire that burns - Circa waves.jpg',
  },
  title: 'Fire that burns',
  author: 'Circa waves',
  uri: {
    online: 'https://firebasestorage.googleapis.com/v0/b/bloom-9ea06.appspot.com/o/songs%2FCirca%20Waves%20-%20Fire%20That%20Burns.mp3?alt=media&token=a3e4086b-f072-452e-a330-31500408ed45',
    offline: 'assets/songs/Circa Waves - Fire That Burns.mp3',
  },
  task: 'Ponerme modo rockstar',
}

export default function LayoutContainer() {
  const { path } = useRouteMatch();
  const [song, setSong] = useState(defaultSong);
  const playerRef = useRef({});
  const { updateNetworkState } = useContext(OfflineContext);

  useEffect(() => {
    function setOnline() {
      updateNetworkState(true);
    }

    function setOffline() {
      updateNetworkState(false);
    }

    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    }
  }, [updateNetworkState]);

  function updateSong(selectedSong) {
    playerRef.current.classList.remove('Player--Hidden');
    setSong({
      ...selectedSong,
    });
  }

  function hidePlayer() {
    playerRef.current.classList.add('Player--Hidden');
  }

  return (
    <Layout>
      <SideMenu>
        <Sidenav />
      </SideMenu>
      <Content>
        <>
          <Route path={`${path}/home`} exact>
            <HomePage playSong={updateSong} />
          </Route>
          <Route path={`${path}/activities`}>
            <ActivitiesPage playSong={updateSong} />
          </Route>
          <Route path={`${path}/weather`}>
            <WeatherPage playSong={updateSong} />
          </Route>
        </>
      </Content>
      <PlayerBox ref={playerRef}>
        <Player song={song} hidePlayer={hidePlayer} />
      </PlayerBox>
    </Layout>
  )
}