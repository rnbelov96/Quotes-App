export default (min: number, max: number) => {
  const raundedMin = Math.ceil(min);
  const raundedMax = Math.floor(max);
  return Math.floor(Math.random() * (raundedMax - raundedMin + 1)) + raundedMin;
};
