export const LOADING = 'LOADING';
export const FETCH_TRACKS = 'FETCH_TRACKS';
export const ERROR = 'ERROR';
export const TRACKS_FOUND = 'TRACKS_FOUND';
export const SEARCH_TRACKS = 'SEARCH_TRACKS';
export const SEARCH_BY_TASK = 'SEARCH_BY_TASK';
export const RESET = 'RESET';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';

export const initialState = {
  data: {},
  loading: true,
  error: null,
  tracksFound: [],
  activities: [],
  searching: false,
  searchingByTask: false,
}


export default function TracksReducer(state, action) {
  const states = {
    LOADING: {...state, loading: true},
    FETCH_TRACKS: {...state, data: action.payload, loading: false},
    ERROR: {...state, error: action.payload, loading: false},
    TRACKS_FOUND: {...state, loading: false, tracksFound: action.payload, searching: true},
    SEARCH_TRACKS: {
      ...state,
      loading: false,
      tracksFound: searchTracks(action.payload, state.data),
      searching: true
    },
    SEARCH_BY_TASK: {
      ...state,
      loading: false,
      searchingByTask: true,
      tracksFound: searchByTask(action.payload, state.data),
    },
    RESET: {
      ...state,
      searchingByTask: false,
      searching: false,
      tracksFound: [],
    },
    FETCH_ACTIVITIES: {...state, activities: action.payload, loading: false},
  };
  
  return states[action.type] || state;
}

function searchTracks(searchArgument, data) {
  try {
    const allTracks = getAllTracks(data);
    const filteredTracks = allTracks?.filter(song => song.title?.toLowerCase().match(searchArgument?.toLowerCase()));
    return filteredTracks;
  } catch (error) {
    return [];
  }
}

function searchByTask(task, data) {
  try {
    const allTracks = getAllTracks(data);
    const filteredTracks = allTracks?.filter(song => song.task === task);
    return filteredTracks;
  } catch (error) {
    return [];
  }
}

function getAllTracks(data) {
  const allTracks = data.categories?.map(cat => cat.songs).reduce((previous, current) => previous.concat(current));
  return allTracks;
}