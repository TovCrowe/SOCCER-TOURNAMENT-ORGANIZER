import {Suspense} from 'react'

function Table({teams}) {
  return (
    <>      <table className="w-full">
    <thead>
      <tr>
        <th className="px-4 py-2">Posición</th>
        <th className="px-4 py-2">Nombre del Equipo</th>
        <th className="px-4 py-2">Puntos</th>
        <th className="px-4 py-2">Victorias</th>
        <th className="px-4 py-2">Empates</th>
        <th className="px-4 py-2">Derrotas</th>
        <th className="px-4 py-2">Goles a Favor</th>
        <th className="px-4 py-2">Goles en Contra</th>
        <th className="px-4 py-2">Tarjetas Amarillas</th>
        <th className="px-4 py-2">Tarjetas Rojas</th>
      </tr>
    </thead>
    <tbody>
        <Suspense></Suspense>
    {teams.map((team, index) => (
        <tr key={index} className="bg-green-200">
          <td className="px-4 py-2  text-center ">{index + 1}</td>
        
          <td className="px-4 py-2 text-center ">{team.team_name}</td>
          <td className="px-4 py-2 text-center">{team.points}</td>
          <td className="px-4 py-2  text-center">{team.wins}</td>
          <td className="px-4 py-2  text-center">{team.draws}</td>
          <td className="px-4 py-2 text-center">{team.losses}</td>
          <td className="px-4 py-2 text-center">{team.goals_for}</td>
          <td className="px-4 py-2 text-center">{team.goals_against}</td>
          <td className="px-4 py-2 text-center">{team.yellow_cards}</td>
          <td className="px-4 py-2 text-center">{team.red_cards}</td>
        </tr>
      ))}
    </tbody>
  </table>

      </>
  )
}

export default Table