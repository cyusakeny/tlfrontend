import React from 'react';
import Pic from '../images/stephen-curry.jpg'
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Edit =(props)=>{
    return(
<div className="bg-white  w-6.5 text-black border-2 ml-80 shadow-lg rounded-lg mt-10">
    <p className='ml-52 text-gray-400 text-2xl mb-4'>Edit Profile</p>
    <div class="flex flex-wrap justify-center left-20 relative">
  <div class="w-6/12 sm:w-4/12 px-4">
    <img src={Pic} alt="..." class="shadow-lg rounded-full h-36 w-36 align-middle border-none" />
  </div>
  <label className=" flex flex-col items-center w-36 px-2">
<FontAwesomeIcon icon={faEdit} className="fill-current text-blue-300 w-12 h-12 absolute left-64 top-24"/>
<input type="file" name="ProfileImage" id="ImageId" className="hidden" />
</label>
</div>
    <form action="" method="post" className="flex flex-col px-28 space-y-2 pb-10 mt-6">
        <label className='font-sans'>Name</label>
        <input type="text" className='w-80 border-gray-300 border rounded-sm outline-none'placeholder='Eg:Joe Russo'/>
        <label className='font-sans'>Country</label>
        <input type="text"className='w-80 border-gray-300 border rounded-sm outline-none'/>
        <label className='font-sans'>Proffessional</label>
        <input type="text" className='w-80 border-gray-300 border rounded-sm outline-none'placeholder='Eg:Software Engineer'/>
    </form>
</div>
    )
}
export default Edit;