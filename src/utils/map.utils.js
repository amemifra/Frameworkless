export const mapToArray = map => {
  const out = [];
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      out.push(...map[key]);
    }
  }
  return out;
};

export const getMapKeys = map => {
  const out = [];
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      out.push(key);
    }
  }
  return out;
};

