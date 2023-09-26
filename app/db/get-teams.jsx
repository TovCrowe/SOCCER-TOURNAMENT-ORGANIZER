export default async function getTeamsData() {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_DATABASE_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const teams = await response.json();
          return teams;
    }
    catch (error) {
        console.log(error)
    }
}


