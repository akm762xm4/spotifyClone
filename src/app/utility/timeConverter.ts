export const TimeConverter = (ms: number, flag?: string) => {
  const min: number = Math.floor((ms / 1000 / 60) << 0)
  let sec = Math.floor((ms / 1000) % 60)
  if (sec.toString().length < 2) {
    sec = Number(sec.toString().concat("0"))
  }

  if (flag) {
    const Time = `${min} min ${sec} sec`
    return Time
  }
  const Time = `${min}:${sec}`
  return Time
}
