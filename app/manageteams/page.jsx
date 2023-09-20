'use client'
import { motion } from "framer-motion";
import {useState, useEffect, Suspense} from "react";
import Modal from "../components/Modal";
import Card from "../components/Card";
import getTeamsData from "../db/get-teams";
function page() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const teamsData = await getTeamsData();
  
        setTeams(teamsData);
      } catch (error) {
        console.error("Error fetching teams data:", error);
      }
    }
  
    fetchData();
  }, [teams]);
  return (
    <>
    <h1 className="text-center text-6xl text-green-700 mb-8 font-bold p-3">
      Manage
    </h1>
        
      <div className="grid grid-cols-2 gap-4 justify-evenly">
      {teams.map((team,index)  => (
        <Card team={team} key={index} />
      ))}
      
    </div>

    </>
  );
}

export default page;
