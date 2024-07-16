export const formatPokemonId = (id: number): string => {
  if (id < 10) {
    return `#000${id}`;
  } else if (id < 100) {
    return `#00${id}`;
  } else {
    return `#0${id}`;
  }
};
