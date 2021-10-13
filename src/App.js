import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import BloomPage from './features/bloom/bloom.page';
import theme from './infrastructure/index';
import OfflineProvider from './services/offline/offline.context';
import TracksProvider from './services/tracks/tracks.context';
import LayoutContainer from './shared/containers/layout.container';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BloomPage} />
          <TracksProvider>
            <OfflineProvider>
              <Route path="/browse" component={LayoutContainer} />
            </OfflineProvider>
          </TracksProvider>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
