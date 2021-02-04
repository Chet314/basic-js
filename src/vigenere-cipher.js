class VigenereCipheringMachine {

  directionOfMashine = true
  constructor(type) {
    if (type === false) {
      this.directionOfMashine = false
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('lack of arguments')

    const m = [...message.toUpperCase()]
    const k = [...key.toUpperCase()]
    let i = 0

    let array = m.map(el => el.charCodeAt() >= 65 && el.charCodeAt() <= 90 ? String.fromCharCode(((el.charCodeAt() - 65 + k[i++ % k.length].charCodeAt() - 65) % 26) + 65) : el)

    return this.directionOfMashine ? array.join('') : array.reverse().join('')

  }

  decrypt(message, key) {

    if (message === undefined || key === undefined) throw new Error('lack of arguments')

    const m = [...message.toUpperCase()]
    const k = [...key.toUpperCase()]
    let i = 0

    let array = m.map(el => el.charCodeAt() >= 65 && el.charCodeAt() <= 90 ? String.fromCharCode(((el.charCodeAt() - 65) - (k[i++ % k.length].charCodeAt() - 65) + 26) % 26 + 65) : el)

    return this.directionOfMashine ? array.join('') : array.reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
