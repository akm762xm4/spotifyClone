export const RandomColorGenerator = () => {
  const randomColor = Math.random().toString(16).substr(-6)
  return randomColor
}
