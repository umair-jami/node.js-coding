const EventEmitter = require("events");
const emitter = new EventEmitter();

const messageListener = (data) => {
  console.log("Message received: " + data);
};

const anotherMessageListener = (data) => {
  console.log("Another message received: " + data);
};

emitter.once("message", anotherMessageListener);
emitter.once("message", messageListener);
console.log(emitter.listeners("message")); // []

emitter.emit("message", "Hello, World!");


// removing (example)
emitter.removeListener("message", messageListener);
emitter.removeListener("message",anotherMessageListener)
console.log(emitter.listeners("message")); // []