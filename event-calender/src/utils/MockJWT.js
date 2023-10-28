export const generateMockJWT = (payload) => {
  return btoa(JSON.stringify(payload));
};
