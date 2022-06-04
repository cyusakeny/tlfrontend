import {io} from "socket.io-client";
import React from "react";
const socketRef =  io.connect("http://localhost:5000",{ transports: ['websocket']
});
export const SocketContext = React.createContext(socketRef)