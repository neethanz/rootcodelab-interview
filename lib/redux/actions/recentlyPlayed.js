const addToRecentlyPlayed = recentlyPlayed => {
  return {
    type: 'recentlyPlayed/add',
    payload: recentlyPlayed,
  };
};

export default addToRecentlyPlayed;
