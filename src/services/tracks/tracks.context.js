import React, { createContext, useCallback, useReducer } from 'react';
import TracksReducer, { FETCH_ACTIVITIES, FETCH_TRACKS, initialState, LOADING, RESET, SEARCH_BY_TASK, SEARCH_TRACKS} from './tracks.reducer';
import { songsData, activities } from '../../infrastructure/mock';

export const TracksContext = createContext();

export default function TracksProvider({ children }) {
  const [ state, dispatch ] = useReducer(TracksReducer, initialState);

  const fetchData = useCallback(function () {
    dispatch({ type: FETCH_TRACKS, payload: songsData });
  }, []);

  const fetchActivities = useCallback(function () {
    dispatch({ type: FETCH_ACTIVITIES, payload: activities });
  }, []);

  const searchTracks = useCallback(function selectTracks(searchArgument) {
    dispatch({type: LOADING});
    dispatch({ type: SEARCH_TRACKS, payload: searchArgument });
  }, []);

  const searchTracksByTask = useCallback(function selectTracks(task) {
    dispatch({ type: LOADING });
    dispatch({ type: SEARCH_BY_TASK, payload: task });
  }, []);

  const resetResults = useCallback(function reset() {
    dispatch({ type: RESET });
  }, []);

  const childProps = {
    state,
    searchTracks,
    fetchData,
    searchTracksByTask,
    resetResults,
    fetchActivities,
  };

  return (
    <TracksContext.Provider value={childProps}>
      { children }
    </TracksContext.Provider>
  );
}