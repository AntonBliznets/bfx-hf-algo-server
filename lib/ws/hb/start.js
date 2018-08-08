'use strict'

const HB_INTERVAL = 2500
const sendHB = require('./send_hb')

module.exports = (asState = {}) => {
  const { hbi } = asState

  if (hbi !== null) {
    return asState
  }

  return {
    ...asState,
    hbi: setInterval(sendHB.bind(null, asState), HB_INTERVAL)
  }
}