export default async function addTeam(name, city, foundation) { 
    try{
        const response = await fetch('https://render-soccer-teams.onrender.com/teams/', {
            method: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const teams = await response.json();
        return teams;
    }
    catch (error) {
        console.log('there was an error')
    }
 }