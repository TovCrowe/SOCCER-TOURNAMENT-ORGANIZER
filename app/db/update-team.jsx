export default async function updateTeam(id, updatedTeamData) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DATABASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTeamData)
            
        });
        console.log('URL:', `${process.env.NEXT_PUBLIC_DATABASE_URL}/${id}`);
        console.log('Body:', JSON.stringify(updatedTeamData))
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const teams = await response.json();
        return teams;
    } catch (error) {
        console.log(error)
    }


}