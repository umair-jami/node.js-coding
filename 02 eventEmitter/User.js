const ChatRoom=require("./ChatRoom")
const userRoom=new ChatRoom("genral")

userRoom.on("message",(data)=>{
    console.log("Message received: " + data);
})

userRoom.join("Umair`")
