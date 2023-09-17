"use client";
import { useState, useEffect, Suspense } from "react";
import getTeamsData from "../db/get-teams";
import Table from "../components/Table";

function PositionsTable() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const teamsData = await getTeamsData();
        
        // Ordena los equipos por puntos de forma descendente,
        // y luego por diferencia de goles de forma descendente,
        // y finalmente por goles anotados de forma descendente.
        const sortedTeams = teamsData.sort((a, b) => {
          if (b.points !== a.points) {
            return b.points - a.points; // Ordena por puntos
          } else if (b.goalDifference !== a.goalDifference) {
            return b.goalDifference - a.goalDifference; // Ordena por diferencia de goles
          } else {
            return b.goalsScored - a.goalsScored; // Ordena por goles anotados
          }
        });
  
        setTeams(sortedTeams);
      } catch (error) {
        console.error("Error fetching teams data:", error);
      }
    }
  
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Positions Table</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Table teams={teams} />
      </Suspense>
      
    </div>
  );
}

export default PositionsTable;
