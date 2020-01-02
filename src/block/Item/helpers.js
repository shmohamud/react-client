export const cleanTimestamp = time => {
  const timestamp = new Date(time).toLocaleString();
  return timestamp;
};

export const truncateStr = str => {
  if (str) {
    let truncated = str.substring(0, 20);
    truncated += "...";
    return truncated;
  }
  return "default";
};
