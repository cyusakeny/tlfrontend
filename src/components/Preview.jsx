import React from 'react';
const Preview= (props)=>{
    const text = props.text.split('');
    return(
        <div className="h-40 ml-6 mr-6 bg-white border-2 border-black overflow-hidden">
         {
             text.map((usertext,i)=>{
             let color;
             if(i<props.userInput.length){
                color=usertext===props.userInput[i]?"green":"red";
             }
            
            return <span className="text-black " style={{color:color}} key={i}>
                   {usertext}
            </span> 
             })
         }
        </div>
    );
}
export default Preview;
