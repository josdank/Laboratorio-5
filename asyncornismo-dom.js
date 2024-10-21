// Uso de API's

// Link de la coleccion de API's https://github.com/public-api-lists/public-api-lists.git

// API en cuestion https://rickandmortyapi.com/api/character/

// then y catch
fetch("https://rickandmortyapi.com/api/character/1") // Rick Sanchez
    .then((request) => request.json())
    .then((data) => {
        console.log('Personaje principal de Rick and Morty:\n', data, '\n');
    })
    .catch((error) => {
        console.log(error);
    });

// async y await
const getRickAndMortyAPI = async () => {
    try {
        let request = await fetch("https://rickandmortyapi.com/api/character/2"); // Morty Smith
        let data = await request.json();
        console.log('Personaje secundario de Rick and Morty:\n', data, '\n');
    } catch (error) {
        console.log(error);
    }
};

getRickAndMortyAPI();
