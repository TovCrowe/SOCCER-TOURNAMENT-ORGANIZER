export default async function getTeamsDataId(id) {
    try {
        const url = `${process.env.NEXT_PUBLIC_DATABASE_URL}/${id}`; // Correct URL construction
        const response = await fetch(url, {
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
    } catch (error) {
        console.error(error); // Changed to console.error for better error handling
    }
}
