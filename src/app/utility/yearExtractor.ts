export const yearExtractor = (date: string) => {
  const d = new Date(date)
  return d.getFullYear()
}
