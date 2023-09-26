export default async function addTeam(team_name, city, foundation_year) { 
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_DATABASE_URL, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify({
                team_name: team_name,
                city: city,
                foundation_year: foundation_year
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const teams = await response.json();
        return teams;
    } catch (error) {
        console.error('there was an error', error);
    }
}