import {combineReducers} from '@reduxjs/toolkit';

const recentlyPlayedReducer = (state = {songs: []}, action) => {
  switch (action.type) {
    case 'recentlyPlayed/add':
      return {songs: [...state, action.payload]};

    default:
      return state;
  }
};

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'user/save':
      return action.payload;
    case 'user/remove':
      return null;
    default:
      return state;
  }
};

const reducer = combineReducers({
  recentlyPlayed: recentlyPlayedReducer,
  user: userReducer,
});

export default reducer;
