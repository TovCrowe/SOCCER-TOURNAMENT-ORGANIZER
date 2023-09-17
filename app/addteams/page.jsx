"use client";
import { useState } from "react";
import addTeam from "../db/add-team";

function Page() {
  const [teamData, setTeamData] = useState({
    team_name: "",
    city: "",
    foundation_year: 0,
  });


  const handleSubmit = async (e) => {

  }

  return (
    <div>
      <h1 className="text-center text-6xl text-green-700 mb-8 font-bold p-3">
        Add a team
      </h1>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col rounded-xl shadow-xl p-3"
      >
        <div className="flex flex-col mb-5">
          <label
            htmlFor="name"
            className="underline decoration-green-400 font-bold"
          >
            Team name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-green-100 rounded-xl  p-3"
          />
        </div>
        <div className="flex flex-col mb-5">
          {" "}
          <label
            htmlFor="city"
            className="underline decoration-green-400 font-bold"
          >
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="bg-green-100 rounded-xl p-3"
          />
        </div>
        <div className="flex flex-col mb-5">
          {" "}
          <label
            htmlFor="foundation"
            className="underline decoration-green-400 font-bold"
          >
            Foundation year:
          </label>
          <input
            type="text"
            id="foundation"
            name="foundation"
            className="bg-green-100 rounded-xl p-3"
          />
        </div>
        <div className="flex flex-col mb-5">
          {" "}
          <button
            type="submit"
            className="bg-green-200 hover:bg-green-400 p-3 rounded-full font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
