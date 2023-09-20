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
        
  
        const sortedTeams = teamsData.sort((a, b) => {
          if (b.points !== a.points) {
            return b.points - a.points; 
          } else if (b.goalDifference !== a.goalDifference) {
            return b.goalDifference - a.goalDifference; 
          } else {
            return b.goalsScored - a.goalsScored; // 
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
      <h1 className="text-2xl font-semibold mb-4 animate-fade-right">Positions Table</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Table teams={teams} />
      </Suspense>
      
    </div>
  );
}

export default PositionsTable;
