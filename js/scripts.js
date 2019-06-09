

            // id's html;
        let button = document.querySelector('#botao');
        let name = document.querySelector('#Name');
        let population = document.querySelector('#Population');
        let climate = document.querySelector('#Climate');
        let terrain = document.querySelector('#Terrain');
        let films = document.querySelector('#filmes');


        // aleatoriedade e getApi Func;
    async function getPlanet() {
        let Random = Math.floor(( Math.random() * 10 ) + 1 )
        let api = 'https://swapi.co/api/planets/' + Random

        // integrando API para retornar planetas e filmes;
        let planet = await axios.get(api)
        let films = await Promise.all (
            planet.data.films.map(axios.get)
        )
            // arrays de planetas e filmes;
        let planetData = planet.data
        let filmsData = films.map(film => film.data)

        updateInfo(planetData, filmsData)     
}
        // Adicionando retorno da api ao html;
    function updateInfo(planetData, filmsData) {   
    
        let titles = filmsData.map(filmData => filmData.title)

        name.innerText = 'Planeta: ' + planetData.name;
        population.innerText = 'População total: ' + planetData.population;
        climate.innerText = 'Clima: ' + planetData.climate;
        terrain.innerText = 'Terreno: ' + planetData.terrain;    
        films.innerText = 'Aparição em filmes: ' + titles.join(' , ');
    }

        // Adicionando função getPlanet ao click do botão;
        button.addEventListener('click', getPlanet);


////////////////////////////////////////////////