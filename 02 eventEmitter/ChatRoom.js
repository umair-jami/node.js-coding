const EventEmitter = require("events")

class ChatRoom extends EventEmitter{
    constructor(name){
        super()
        this.name = name
    }
    join(userName){
        console.log(`welcome to that chat room ${userName}`)
        this.emit("message", `${userName} has joined the chat room ${this.name}`)
    }
}

module.exports = ChatRoom