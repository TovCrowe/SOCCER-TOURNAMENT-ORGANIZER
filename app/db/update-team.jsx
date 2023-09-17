export default async function updateTeam() {
    try {
        const response = await fetch('https://render-soccer-teams.onrender.com/teams/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: '1',
                name: 'Real Madrid',
                country: 'Spain',
                stadium: 'Santiago Bernabeu',
                capacity: '5000000'
            })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const teams = await response.json();
        return teams;
    } catch (error) {
        console.log(error)
    }


}