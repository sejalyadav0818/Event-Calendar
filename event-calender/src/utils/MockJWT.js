export const generateMockJWT = (payload) => {
    console.log(payload);
  return btoa(JSON.stringify(payload));
};
