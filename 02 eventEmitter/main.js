const EventEmitter = require('events')
const emitter = new EventEmitter()
const greetfunc = (username) => {
  console.log(`Hello, ${username}!`)
}
emitter.on('greet', greetfunc)
const greetUser = (username) => {
  emitter.emit('greet', username)
}
emitter.on('greet',greetUser)
