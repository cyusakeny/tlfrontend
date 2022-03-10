import { React, useState } from "react";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../images/avatar.png";
import "react-image-crop/dist/ReactCrop.css";
const Edit = () => {
  const [ProfileImage, setProfile] = useState({
    image: false,
    src: Avatar,
  });
  const handlepic = (e) => {
    var picture = e.target.files[0];
    var src = URL.createObjectURL(picture);
    setProfile({ image: picture });
    setProfile({ src: src });
  };
  return (
    <div className="bg-white  w-6.5 text-black border-2 ml-80 shadow-lg rounded-lg mt-10">
      <p className="ml-32 text-gray-400 text-2xl mb-4">Edit Profile</p>
      <div class="flex flex-wrap justify-center left-16 relative">
        <div class="w-6/12 sm:w-5/12 px-4">
          <img
            src={ProfileImage.src}
            alt="Profile pic"
            class="shadow-lg rounded-full h-36 w-36 align-middle border-none"
          />
        </div>
        <label className=" flex flex-col items-center w-36 px-2">
          <FontAwesomeIcon
            icon={faEdit}
            className="fill-current text-gray-600 w-12 h-12 absolute left-44 top-24"
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
      >
        <label className="font-sans">Name</label>
        <input
          type="text"
          className="w-80 border-gray-300 border rounded-sm outline-none"
          placeholder="Eg:Joe Russo"
        />
        <label className="font-sans">Country</label>
        <input
          type="text"
          className="w-80 border-gray-300 border rounded-sm outline-none"
        />
        <label className="font-sans">Proffessional</label>
        <input
          type="text"
          className="w-80 border-gray-300 border rounded-sm outline-none"
          placeholder="Eg:Software Engineer"
        />
      </form>
    </div>
  );
};
export default Edit;
