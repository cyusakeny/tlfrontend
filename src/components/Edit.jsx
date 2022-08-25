import { React, useState } from "react";
import { faEdit,faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
const Edit = (props) => {
  const [localImage,setImage]=useState(false);
  const [localSource, setSrc] = useState(props.image);
  const [username,SetUsername] = useState("");
  const [status, setStatus] = useState(false);
  const handlepic = async(e) => {
    var picture = e.target.files[0];
    var src = URL.createObjectURL(picture);
    setImage(picture);
    setSrc(src);

  };
  const SendData = async(e) => {
    e.preventDefault()
    const token = localStorage.getItem("token");
    const formdata = new FormData();
    formdata.append('image',localImage);
    formdata.append('username',username);

    await axios({
      method: "POST",
      url: "https://tlserver.herokuapp.com/users/update",
      headers: {
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${token}`,
      },
      data:formdata,
    })
      .then(async(response) => {
        console.log(response);
        setStatus(true)
      })
      .catch((err) => {
        console.log("err:", err);
      });

  }
  if(status===false){
  return (
    <div className="bg-white  w-6.5 text-black border-2 ml-80 shadow-lg rounded-lg mt-10">
      <p className="ml-32 text-gray-400 text-2xl mb-4">Edit Profile</p>
      <div class="flex flex-wrap justify-center left-16 relative">
        <div class="w-6/12 sm:w-5/12 px-4">
          <img
            src={localSource}
            alt="Profile pic"
            class="shadow-lg rounded-full h-36 w-36 align-middle border-none"
          />
        </div>
        <label className=" flex flex-col items-center w-36 px-2">
          <FontAwesomeIcon
            icon={faEdit}
            className="fill-current text-gray-600 w-8 h-8 absolute left-44 top-24"
          />
          <input
            type="file"
            name="profileimage"
            id="imageid"
            className="hidden"
            onChange={handlepic}
          />
        </label>
      </div>
      <form
        action=""
        method="post"
        className="flex flex-col px-2 space-y-2 pb-10 mt-6"
        onSubmit={SendData}
      >
        <label className="font-sans">Username</label>
        <input
          type="text"
          className="w-80 border-gray-300 border rounded-sm outline-none"
          placeholder="Eg:Joe Russo"
          required
          onChange={(e) => {
            SetUsername(e.target.value);
          }}
        />
        <label className="font-sans">Country</label>
        <input
          type="text"
          className="w-80 border-gray-300 border rounded-sm outline-none"
        />
        <label className="font-sans">Proffession</label>
        <input
          type="text"
          className="w-80 border-gray-300 border rounded-sm outline-none"
          placeholder="Eg:Software Engineer"
        />
         <button
            type="submit"
            className="h-12 rounded-md text-gray-700 w-32 text-md bg-gray-300 mt-4"
          >
            Save
          </button>
      </form>
    </div>
  );}else{
  return (
    <div className="bg-white text-black w-1/3 text-black border-2 ml-40 pt-8 shadow-lg rounded-lg mt-10">
    <h1 className="mt-10 mb-20 ml-6 mr-6 ">
      Your profile Is Successfully updated
      <FontAwesomeIcon icon={faCheckCircle} className="ml-3" />
    </h1>
  </div>
  )
  }
};
export default Edit;
