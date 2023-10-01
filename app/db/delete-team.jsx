export default async function deleteTeam(id) {
    try {
        const url = `${process.env.NEXT_PUBLIC_DATABASE_URL}/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // No necesitas parsear la respuesta como JSON, ya que es una eliminación
        // que generalmente no devuelve datos.
        // const teams = await response.json(); 

        return true; // Indica que la eliminación fue exitosa
    } catch (error) {
        console.error(error);
        return false; // Indica que la eliminación falló
    }
}