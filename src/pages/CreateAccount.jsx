import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogSideBar from '../components/LogSideBar';
class CreateAccount extends Component {
    state={
        IsPasswordValid:[],
        CurrentPassword:"",
        PassWordsMatch:false,
    }
    handlePassword=(event)=>{
const inputPassword= event.target.value
let Checker =[]
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var capitalLetter=/[A-Z]/
var numbers=/\d/g
if(format.test(inputPassword)){
Checker[0]="t"
}
else{
 Checker[0]="f"
}
if(capitalLetter.test(inputPassword)){
    Checker[1]="t"
}
else{
    Checker[1]="f"
}
if (numbers.test(inputPassword)){
    Checker[2]="t"
}
else{
    Checker[2]="f"
}
this.setState({
    IsPasswordValid:Checker,
    CurrentPassword:inputPassword
})
}

ShowTheErrors = ()=>{
    let tailwindClass=[]
    if (this.state.IsPasswordValid[0]==="t") {
       tailwindClass[0]="text-green-600" 
    }
    else if(this.state.IsPasswordValid[0]==="f")
   { 
    tailwindClass[0]="text-red-600"
   }

if (this.state.IsPasswordValid[1]==="t") {
    tailwindClass[1]="text-green-600" 
 }
 else if(this.state.IsPasswordValid[1]==="f")
{ tailwindClass[1]="text-red-600"
}
if (this.state.IsPasswordValid[2]==="t") {
    tailwindClass[2]="text-green-600" 
 }
 else if(this.state.IsPasswordValid[2]==="f")
{ tailwindClass[2]="text-red-600"
}
else {
    return "";
}


return (
    <div>    <p className={tailwindClass[0]}>
        Contains Special Characters
    </p>
     <p className={tailwindClass[1]}>
     Contains Capital Letter 
 </p>
 <p className={tailwindClass[2]}>
     Contains Numbers 
 </p>
 </div>

);
}
ComparePasswords = (event)=>{
const PassWordConfirm = event.target.value
console.log(PassWordConfirm)
if(this.state.CurrentPassword===PassWordConfirm){
    this.setState({
        PassWordsMatch:true
    })
}
else{
    this.setState({
        PassWordsMatch:false
    })
}
}

    render() { 
        const element = this.ShowTheErrors();
        let secondElement = ""
        if (this.state.PassWordsMatch) {
            secondElement= <p className="text-green-600">Passwords Match</p>
            
        }
        return (  
            <div className="">
           <LogSideBar/>
           <div className="bg-white  ml-80 absolute h-full w-9.10 border-2 overflow-hidden">
               <div className="flex flex-row space-x-5 ml-16 mt-10">
                <p className="text-2xl">Welcome to</p>
                <p className="text-2xl">TYPING</p>
                <p className="text-xl font-postcolombo mt-0.5 text-yellow-color">LORD</p>
               </div>
        <form action="" className="grid grid-cols-1 ml-16 mt-6">
                   <label className="font-prompt text-2xl ">First Name</label>
                   <input type="text" name="FirstName" id="FirstNameId" className=" bg-gray-color bg-opacity-50 w-72 h-8 
                   rounded-md outline-none" />
                   <label className="font-prompt text-2xl ml-98.10 -mt-16 ">Last Name</label>
                   <input type="text" name="LastName" id="LastNameId" className=" bg-gray-color bg-opacity-50 w-72 h-8 
                   rounded-md outline-none ml-98.10 -mt-8" />
                   <label className="font-prompt text-2xl mt-4">Email</label>
                   <input type="text" name="Email" id="EmailId" className=" bg-gray-color bg-opacity-50 w-102 h-8 
                   rounded-md outline-none" />
                   <label className="font-prompt text-2xl mt-4">User Name</label>
                   <input type="text" name="UserName" id="UserNameId" className=" bg-gray-color bg-opacity-50 w-72 h-8 
                   rounded-md outline-none" />
                   <label className="font-prompt text-2xl ml-98.10 -mt-16">Profession</label>
                   <input type="text" name="Profession" id="ProfessionId" className=" bg-gray-color bg-opacity-50 w-72 h-8 
                   rounded-md outline-none ml-98.10 -mt-8" />
                   <label className="font-prompt text-2xl mt-4 ">Password</label>
                   <input type="text" name="Password" id="PasswordId" className=" bg-gray-color bg-opacity-50 w-72 h-8 
                   rounded-md outline-none" onChange={this.handlePassword}/>
                   <div>
                       {element}
                   </div>
                   <label className="font-prompt text-2xl ml-98.10 -mt-16 ">Confirm Password</label>
                   <input type="text" name="ConfirmPass" id="ConfirmPassId" className=" bg-gray-color bg-opacity-50 w-72 h-8 
                   rounded-md outline-none ml-98.10 -mt-8" onChange={this.ComparePasswords} />
                 
        <button className="bg-black text-white text-sm w-32 h-12 rounded-md mt-12 ml-52">Create Account</button>
        </form>
        <div className="flex flex-row ml-16 space-x-2 -mt-8">
        <p className="text-gray-color-50"> Have An Account?</p>
        <Link to="/login" className="font-bold font-prompt">Login</Link>
        </div>
           </div>
            </div>
        );
    }
}
 
export default CreateAccount;