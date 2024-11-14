export const generateDummyData = () => {
  return Array.from({ length: 7 }, () => ({
    value: Math.floor(Math.random() * 100)
  }));
};