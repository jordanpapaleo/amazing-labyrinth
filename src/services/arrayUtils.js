export function shuffle (array) {
  const copiedArray = [...array]
  let i = 0
  let j = 0
  let temp = null

  for (i = copiedArray.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = copiedArray[i]
    copiedArray[i] = copiedArray[j]
    copiedArray[j] = temp
  }

  return copiedArray
}
