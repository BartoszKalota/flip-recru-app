export const getIdFromUrl = (url: string) => {
  const urlWithoutLastSlash = url.slice(0, -1);
  const lastIndexCharacterToRemove = urlWithoutLastSlash.lastIndexOf('/') + 1;
  return urlWithoutLastSlash.slice(lastIndexCharacterToRemove);
};
