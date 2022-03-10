import { React } from "react";
const AddCompetition = () => {
  return (
    <div className="bg-white text-black w-1/3 text-black border-2 ml-40 pt-8 shadow-lg rounded-lg mt-10">
      <h1 className=" absolute left-72 top-14 font-sans text-xl text-gray-600">
        Register Competition
      </h1>
      <form
        action="addcompetition"
        method="post"
        className="flex flex-col px-6 space-y-2 pb-10 mt-6"
      >
        <label className="font-sans text-gray-300">Name</label>
        <input
          type="text"
          name="compname"
          id="compid"
          className="w-96 border-gray-300 border rounded-sm outline-none"
        />
        <label className="font-sans text-gray-300">Description</label>
        <textarea
          name="descrname"
          id="descrid"
          className="w-96 border-gray-300 border rounded-sm outline-none"
          style={{ resize: "none" }}
        ></textarea>
        <label className="font-sans text-gray-300">Prices</label>
        <textarea
          name="prices"
          id="priceid"
          className="w-96 border-gray-300 border rounded-sm outline-none"
          style={{ resize: "none" }}
        ></textarea>
        <label className="font-sans text-gray-300">
          Number of Participants
        </label>
        <input
          type="number"
          name="contesters"
          id="contesters"
          className="w-96 border-gray-300 border rounded-sm outline-none text-gray-500"
        />
      </form>
    </div>
  );
};
export default AddCompetition;