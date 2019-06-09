
// add item ao botão de pesquisa;
        let button = document.querySelector('#botao');
        let name = document.querySelector('#Name');
        let population = document.querySelector('#Population');
        let climate = document.querySelector('#Climate');
        let terrain = document.querySelector('#Terrain');
        let films = document.querySelector('#filmes');


        // aleatoriedade e getApi Func
function getPlanet() {
        let randomNumber = Math.floor(( Math.random() * 10 ) + 1 )
        let apiUrl       = 'https://swapi.co/api/planets/' + randomNumber

            // integrando API para adicionar a função getPlanet;
        axios.get (apiUrl).then(( function ( response ) {        
        updateInfo (response.data)
      
    } ))      
}

function updateInfo(data) {   

        name.innerText = 'Planeta: ' + data.name;
        population.innerText = 'População total: ' + data.population;
        climate.innerText = 'Clima: ' + data.climate;
        terrain.innerText = 'Terreno: ' + data.terrain;    
        films.innerText = 'Aparição em filmes: ' + data.films;
    }

        // Evento Click;
button.addEventListener('click', getPlanet);
