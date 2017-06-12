const path = require('path')
const micro = require('micro')
const listen = require('test-listen')

/**
 * Helper to start micro lambda including a middleware stack
 */
const startMicro = async (handlerFn) => {
  const middleware = require(path.join(process.cwd(), 'middleware.js'))

  const service = micro(
    middleware(handlerFn)
  )
  const url = await listen(service)
  return url
}

module.exports = {
    startMicro
}