import {io} from "socket.io-client";
import React from "react";
const socketRef =  io.connect("https://tlserver.herokuapp.com/",{ transports: ['websocket']
});
export const SocketContext = React.createContext(socketRef)