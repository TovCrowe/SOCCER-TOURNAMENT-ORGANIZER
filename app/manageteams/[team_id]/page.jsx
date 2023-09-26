"use client";
import Modal from "@/app/components/Modal";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import getTeamsDataId from "@/app/db/get-teams-id";
import EditForm from "@/app/components/EditForm";

function TeamId() {
  const [teamId, setTeamId] = useState(null);
  const [team, setTeam] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [foundation, setFoundation] = useState("");
  const [wins, setWins] = useState("");
  const [losses, setLosses] = useState("");
  const [draws, setDraws] = useState("");
  const [goalsScored, setGoalsScored] = useState("");
  const [yellowCards, setYellowCards] = useState("");
  const [redCards, setRedCards] = useState("");

  const pathname = usePathname();
  useEffect(() => {
    const teamId = pathname.split("/")[2];
    setTeamId(teamId);

    async function fetchData() {
      try {
        const teamsData = await getTeamsDataId(teamId);
        setTeam(teamsData);
        if (teamsData && teamsData.length > 0) {
          setName(teamsData[0].team_name);
          setCity(teamsData[0].city);
          setFoundation(teamsData[0].foundation_year);
          setWins(teamsData[0].wins);
          setLosses(teamsData[0].losses);
          setDraws(teamsData[0].draws);
          setGoalsScored(teamsData[0].goals_for);
          setYellowCards(teamsData[0].yellow_cards);
          setRedCards(teamsData[0].red_cards);
        }
      } catch (error) {
        console.error("Error fetching teams data:", error);
      }
    }

    fetchData();
  }, [teamId]);

  return (
    <EditForm
      team={team}
      city={city}
      foundation={foundation}
      wins={wins}
      losses={losses}
      draws={draws}
      goalsScored={goalsScored}
      yellowCards={yellowCards}
      redCards={redCards}
      name={name}
      setCity={setCity}
      setFoundation={setFoundation}
      setWins={setWins}
      setLosses={setLosses}
      setDraws={setDraws}
      setGoalsScored={setGoalsScored}
      setYellowCards={setYellowCards}
      setRedCards={setRedCards}
      setName={setName}
      setTeam={setTeam}
    />
  );
}

export default TeamId;
