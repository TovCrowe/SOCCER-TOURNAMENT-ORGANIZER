import React from 'react'

function FormTeam() {
  return (
    <>
    <h1 className="animate-pulse text-center text-6xl text-green-700 mb-8 font-bold p-3">
        Add a team
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-xl shadow-xl p-3"
      >
        <div className="flex flex-col mb-5">
          <label htmlFor="name" className="underline decoration-green-400 font-bold">
            Team name:
          </label>
          <input
            type="text"
            placeholder="Name..."
            id="name"
            name="name"
            className="bg-green-100 rounded-xl p-3"
            value={teamData.team_name}
            onChange={(e) =>
              setTeamData({ ...teamData, team_name: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="city" className="underline decoration-green-400 font-bold">
            City:
          </label>
          <input
            type="text"
            placeholder="City..."
            id="city"
            name="city"
            className="bg-green-100 rounded-xl p-3"
            value={teamData.city}
            onChange={(e) => setTeamData({ ...teamData, city: e.target.value })}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="foundation" className="underline decoration-green-400 font-bold">
            Foundation year:
          </label>
          <input
            type="number"
            id="foundation"
            name="foundation"
            placeholder="Year..."
            className="bg-green-100 rounded-xl p-3"
            value={teamData.foundation_year}
            onChange={(e) =>
              setTeamData({
                ...teamData,
                foundation_year: parseInt(e.target.value) || 0,
              })
            }
          />
        </div>
        <div className="flex flex-col mb-5">
          <button
            type="submit"
            className=" transition duration-150 ease-in-out bg-green-200 hover:bg-green-400 p-3 rounded-full font-bold"
          >
            Submit
          </button>
        </div>
      </form>
      </>
  )
}

export default FormTeam