import {Suspense} from 'react'

function Table({teams}) {
  return (
    <>      <table className=" border-collapse">
    <thead>
      <tr>
        <th className="px-4 py-2 border border-slate-600">Posición</th>
        <th className="px-4 py-2 border border-slate-600">Nombre del Equipo</th>
        <th className="px-4 py-2 border border-slate-600">Puntos</th>
        <th className="px-4 py-2 border border-slate-600">Victorias</th>
        <th className="px-4 py-2 border border-slate-600">Empates</th>
        <th className="px-4 py-2 border border-slate-600">Derrotas</th>
        <th className="px-4 py-2 border border-slate-600">Goles a Favor</th>
        <th className="px-4 py-2 border border-slate-600">Goles en Contra</th>
        <th className="px-4 py-2 border border-slate-600">Tarjetas Amarillas</th>
        <th className="px-4 py-2 border border-slate-600">Tarjetas Rojas</th>
      </tr>
    </thead>
    <tbody>
    {teams.map((team, index) => (
        <tr key={index} className="odd:bg-green-200 even:bg-green-100  border-slate-600">
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
  )
}

export default Table