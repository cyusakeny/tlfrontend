import React from 'react';
const Popup = (props)=>{
    return(props.trigger)?(
        <div className="w-full bg-blue-color fixed text-white bg-opacity-20 h-full">
            {props.children}
        </div>
    ):"";
}
export default Popup;