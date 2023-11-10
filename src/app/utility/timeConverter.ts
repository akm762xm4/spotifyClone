export const TimeConverter = (ms: number, flag?: string) => {
  let min: number = Math.floor((ms / 1000 / 60) << 0)
  let sec = Math.floor((ms / 1000) % 60)
  if (sec.toString().length < 2) {
    sec = Number(sec.toString().concat("0"))
  }

  if (flag) {
    let Time: string = `${min} min ${sec} sec`
    return Time
  }
  let Time: string = `${min}:${sec}`
  return Time
}
