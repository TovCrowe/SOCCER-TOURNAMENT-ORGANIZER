import React from "react";
import { useState } from "react";
function EditForm({
  name,
  team,
  city,
  foundation,
  wins,
  losses,
  draws,
  goalsScored,
  yellowCards,
  redCards,
}) {
  const [error, setError] = useState(null);
  const [teamEdit, setTeamEdit] = useState({
    name: name,
    foundation: foundation,
    city: city,
    wins: wins,
    losses: losses,
    draws: draws,
    goalsScored: goalsScored,
    yellowCards: yellowCards,
    redCards: redCards,
  });

  console.log(teamEdit);

  console.log("hola", teamEdit);

  console.log("team:", team);
  console.log("team name:", name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("he sido apretado");
  };
  return (
    <div>
      <h1 className="text-center text-6xl text-green-700 mb-8 font-bold p-3">
        Manage the team
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-xl shadow-xl p-3"
      >
        <div className="flex">
          <div className="flex flex-col mb-5 w-1/2">
            <label
              htmlFor="wins"
              className="underline decoration-green-400 font-bold"
            >
              Wins
            </label>
            <input
              type="number"
              id="wins"
              name="wins"
              placeholder={wins}
              className="bg-green-100 rounded-xl p-3 border mr-2"
              value={teamEdit.wins}
              onChange={(e) => {
                const newValue = e.target.value;
                setTeamEdit({ ...teamEdit, wins: newValue });
              }}
            />
          </div>
          <div className="flex flex-col mb-5 w-1/2">
            <label
              htmlFor="losses"
              className="underline decoration-green-400 font-bold"
            >
              Losses
            </label>
            <input
              type="number"
              id="losses"
              name="losses"
              placeholder={losses}
              className="bg-green-100 rounded-xl p-3 border"
              value={teamEdit.losses}
              onChange={(e) => {
                const newValue = e.target.value;
                setTeamEdit({ ...teamEdit, losses: newValue });
              }}
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col mb-5 w-1/2">
            <label
              htmlFor="draws"
              className="underline decoration-green-400 font-bold"
            >
              Draws
            </label>
            <input
              type="number"
              id="draws"
              name="draws"
              placeholder={draws}
              className="bg-green-100 rounded-xl p-3 mr-2"
              value={teamEdit.draws}
              onChange={(e) => {
                const newValue = e.target.value;
                setTeamEdit({ ...teamEdit, draws: newValue });
              }}
            />
          </div>
          <div className="flex flex-col mb-5 w-1/2">
            <label
              htmlFor="goals_scored"
              className="underline decoration-green-400 font-bold"
            >
              Goals scored
            </label>
            <input
              type="number"
              id="goals_scored"
              name="goals_scored"
              placeholder={goalsScored}
              className="bg-green-100 rounded-xl p-3"
              value={teamEdit.goalsScored}
              onChange={(e) => {
                const newValue = e.target.value;
                setTeamEdit({ ...teamEdit, goalsScored: newValue });
              }}
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col mb-5 w-1/2">
            <label
              htmlFor="yellow_cards"
              className="underline decoration-green-400 font-bold"
            >
              Yellow cards
            </label>
            <input
              type="number"
              id="yellow_cards"
              name="yellow_cards"
              className="bg-green-100 rounded-xl p-3 mr-2"
              placeholder={yellowCards}
              value={teamEdit.yellowCards}
              onChange={(e) => {
                const newValue = e.target.value;
                setTeamEdit({ ...teamEdit, yellowCards: newValue });
              }}
            />
          </div>
          <div className="flex flex-col mb-5 w-1/2">
            <label
              htmlFor="red_cards"
              className="underline decoration-green-400 font-bold"
            >
              Red cards
            </label>
            <input
              type="number"
              id="red_cards"
              name="red_cards"
              placeholder={redCards}
              className="bg-green-100 rounded-xl p-3"
              value={teamEdit.redCards}
              onChange={(e) => {
                const newValue = e.target.value;
                setTeamEdit({ ...teamEdit, redCards: newValue });
              }}
            />
          </div>
        </div>

        <div className="flex flex-col mb-5">
          <label
            htmlFor="name"
            className="underline decoration-green-400 font-bold"
          >
            Team name:
          </label>
          <input
            type="text"
            placeholder={name}
            id="name"
            name="name"
            className="bg-green-100 rounded-xl p-3"
            value={teamEdit.name}
            onChange={(e) => {
              const newValue = e.target.value;
              setTeamEdit({ ...teamEdit, name: newValue });
            }}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="city"
            className="underline decoration-green-400 font-bold"
          >
            City:
          </label>
          <input
            type="text"
            placeholder={city}
            id="city"
            name="city"
            className="bg-green-100 rounded-xl p-3"
            value={teamEdit.city}
            onChange={(e) => {
              const newValue = e.target.value;
              setTeamEdit({ ...teamEdit, city: newValue });
            }}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label
            htmlFor="foundation"
            className="underline decoration-green-400 font-bold"
          >
            Foundation year:
          </label>
          <input
            type="number"
            id="foundation"
            name="foundation"
            placeholder={foundation}
            className="bg-green-100 rounded-xl p-3"
            value={teamEdit.foundation}
            onChange={(e) => {
              const newValue = e.target.value;
              setTeamEdit({ ...teamEdit, foundation: newValue });
            }}
          />
        </div>

        <div className="flex flex-col mb-5"></div>

        {error && <div className="text-red-600 mb-3">{error}</div>}
        <div className="flex flex-col mb-5">
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

export default EditForm;
