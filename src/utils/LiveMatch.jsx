import React,{useEffect,useRef} from 'react';
import {io} from'socket.io-client';
const livematch = (props)=>{
    const socketRef = useRef();
    socketRef.current = io.connect("http://localhost:5000",{ transports: ['websocket'] }) 
    useEffect(()=>{ 
        setTimeout(socketRef.current.emit('Calculate'),2000)
        socketRef.current.on('doit',()=>{
            console.log("Hello word");
        })
    })
 
}
 
export default livematch;