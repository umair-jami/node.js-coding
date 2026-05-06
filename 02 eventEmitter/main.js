const EventEmitter = require("events");
const emitter = new EventEmitter();

const messageListener = (data) => {
  console.log("Message received: " + data);
};

const anotherMessageListener = (data) => {
  console.log("Another message received: " + data);
};

emitter.on("message", anotherMessageListener);
emitter.on("message", messageListener);

emitter.emit("message", "Hello, World!");

console.log(emitter.listeners("message")); // []

// removing (example)
emitter.removeListener("message", messageListener);
emitter.removeListener("message",anotherMessageListener)
console.log(emitter.listeners("message")); // []