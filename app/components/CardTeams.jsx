'use client'
import {useEffect} from "react";
import {motion} from "framer-motion";
import { useRouter } from 'next/navigation';


function CardTeams({ team }) {
    const router = useRouter(); 

  return (
    <motion.div
    whileHover={{ scale: 1.020 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.2 }}
      className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-green-700"
    >
      <h5 className="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:text-neutral-50">
        {team.team_name}
      </h5>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          From: {team.city}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Foundation year : {team.foundation_year}
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-white bg-black shadow-xl"
          data-te-ripple-init
          data-te-ripple-color="light"
        onClick={() => router.push(`/manageteams/${team.team_id}`)}
        >
          Manage team
        </motion.button>
      </div>
    </motion.div>
  );
}

export default CardTeams;
