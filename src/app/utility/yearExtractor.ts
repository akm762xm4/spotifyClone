export const yearExtractor = (date: string) => {
  let d = new Date(date)
  return d.getFullYear()
}
