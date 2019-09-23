module.exports = function check(str, bracketsConfig) {
  let regressed = str
  function regress(str, bracket) {
    regressed = str
    let firstIndex = str.indexOf(bracket[0])
    let nextIndex = str.indexOf(bracket[1])
    if (bracket[0] === bracket[1]) nextIndex = str.indexOf(bracket[1], firstIndex + 1)
    if (firstIndex === -1 || nextIndex === -1) return false
    if (firstIndex > nextIndex) return false
    let substr = str.substring(firstIndex + 1, nextIndex)
    for (let i = 0; substr.split('').filter(v => v === bracket[0]).length != i; i++) {
      nextIndex = str.indexOf(bracket[1], nextIndex + 1)
      substr = str.substring(firstIndex + 1, nextIndex)
      if (nextIndex === -1) return false
    }
    if (substr.length % 2 !== 0) return false
    str = str.substring(0, firstIndex) + substr + str.substring(nextIndex + 1, str.length)
    regress(str, bracket)
  }
  for (bracket of bracketsConfig) regress(regressed, bracket)
  return !regressed
}
