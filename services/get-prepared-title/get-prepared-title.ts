export const getPreparedTitle = (title: string) => {
  const titleWithSpaces = title.replace('_', ' ');
  return titleWithSpaces.charAt(0).toUpperCase() + titleWithSpaces.slice(1);
};
