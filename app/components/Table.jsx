import { Suspense } from 'react';
import updateTeam from "../db/update-team";

function Table({ teams }) {





  return (
    <>
      <table className="border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-slate-600">Position</th>
            <th className="px-4 py-2 border border-slate-600">Team Name</th>
            <th className="px-4 py-2 border border-slate-600">Points</th>
            <th className="px-4 py-2 border border-slate-600">Wins</th>
            <th className="px-4 py-2 border border-slate-600">Draws</th>
            <th className="px-4 py-2 border border-slate-600">Losses</th>
            <th className="px-4 py-2 border border-slate-600">Goals For</th>
            <th className="px-4 py-2 border border-slate-600">Goals Against</th>
            <th className="px-4 py-2 border border-slate-600">Yellow Cards</th>
            <th className="px-4 py-2 border border-slate-600">Red Cards</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} className={`odd:bg-green-200 even:bg-green-100  border-slate-600`}>
              <td className="px-4 py-2  text-center border border-slate-600 ">{index + 1}</td>
              <td className="px-4 py-2 text-center border border-slate-600 ">{team.team_name}</td>
              <td className="px-4 py-2 text-center border border-slate-600">{team.points}</td>
              <td className="px-4 py-2  text-center border border-slate-600">{team.wins}</td>
              <td className="px-4 py-2  text-center border border-slate-600">{team.draws}</td>
              <td className="px-4 py-2 text-center border border-slate-600">{team.losses}</td>
              <td className="px-4 py-2 text-center border border-slate-600">{team.goals_for}</td>
              <td className="px-4 py-2 text-center border border-slate-600">{team.goals_against}</td>
              <td className="px-4 py-2 text-center border border-slate-600">{team.yellow_cards}</td>
              <td className="px-4 py-2 text-center border border-slate-600">{team.red_cards}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
