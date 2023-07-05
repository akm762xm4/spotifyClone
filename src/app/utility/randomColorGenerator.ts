export const RandomColorGenerator = () => {
  let Randomcolor = Math.random().toString(16).substr(-6)
  return Randomcolor
}
