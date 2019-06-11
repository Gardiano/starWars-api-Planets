


 // REQUEST COM AJAX - JS PURO.
    // PROMISE - PARAMETROS;

    function Pesqz () {
    var MyPromise = function () {
        return new Promise(function (resolve,reject){

            // Requisição;
            xhr = new XMLHttpRequest();

            // Consumindo API;
            xhr.open('GET', 'https://swapi.co/api/planets/');
            xhr.send(null);

            // Status do retorno da api;
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        // Passando string para javascript Object;
                        resolve (JSON.parse(xhr.responseText));
                    } else {
                        reject('Error request;') }}}} );
    } 

    // Chamando Promise;
        MyPromise()
            // Resposta da api;
            .then(function (response) {                  

                searchz = document.getElementById("procurar").value;   
                    //Validação 1;
                if( searchz == '') {
                   alert('Digite o nome do planeta');
                }
                    //Validação 2;
                if( searchz == null ) {
                    alert('Digite um planeta válido.')
                }
                    //Validação 3;
                if( searchz.length <= 1) {
                    alert('Digite o nome completo do Planeta!');
                 }

                if( searchz == response.results[0]['name']) {
                    document.getElementById("name").innerHTML ='Planeta: ' + response.results[0]['name'];
                    document.getElementById("population").innerHTML ='População: ' +  response.results[0]['population'];
                    document.getElementById("climate").innerHTML = 'Clima: ' + response.results[0]['climate'];
                    document.getElementById("terrain").innerHTML = 'Terreno: ' + response.results[0]['terrain'];
                }

                if( searchz == response.results[1]['name']) {
                    document.getElementById("name").innerHTML ='Planeta: ' + response.results[1]['name'];
                    document.getElementById("population").innerHTML ='População: ' +  response.results[1]['population'];
                    document.getElementById("climate").innerHTML = 'Clima: ' + response.results[1]['climate'];
                    document.getElementById("terrain").innerHTML = 'Terreno: ' + response.results[1]['terrain'];
                }

                if( searchz == response.results[2]['name']) {
                    document.getElementById("name").innerHTML ='Planeta: ' + response.results[2]['name'];
                    document.getElementById("population").innerHTML ='População: ' +  response.results[2]['population'];
                    document.getElementById("climate").innerHTML = 'Clima: ' + response.results[2]['climate'];
                    document.getElementById("terrain").innerHTML = 'Terreno: ' + response.results[2]['terrain'];
                }

                if( searchz == response.results[3]['name']) {
                    document.getElementById("name").innerHTML ='Planeta: ' + response.results[3]['name'];
                    document.getElementById("population").innerHTML ='População: ' +  response.results[3]['population'];
                    document.getElementById("climate").innerHTML = 'Clima: ' + response.results[3]['climate'];
                    document.getElementById("terrain").innerHTML = 'Terreno: ' + response.results[3]['terrain'];
                }

                if( searchz == response.results[4]['name']) {
                    document.getElementById("name").innerHTML ='Planeta: ' + response.results[4]['name'];
                    document.getElementById("population").innerHTML ='População: ' +  response.results[4]['population'];
                    document.getElementById("climate").innerHTML = 'Clima: ' + response.results[4]['climate'];
                    document.getElementById("terrain").innerHTML = 'Terreno: ' + response.results[4]['terrain'];
                    
                }

                if( searchz == response.results[5]['name']) {
                    document.getElementById("name").innerHTML ='Planeta: ' + response.results[5]['name'];
                    document.getElementById("population").innerHTML ='População: ' +  response.results[5]['population'];
                    document.getElementById("climate").innerHTML = 'Clima: ' + response.results[5]['climate'];
                    document.getElementById("terrain").innerHTML = 'Terreno: ' + response.results[5]['terrain'];
                    
                }

                if( searchz == response.results[6]['name']) {
                    document.getElementById("name").innerHTML ='Planeta: ' + response.results[6]['name'];
                    document.getElementById("population").innerHTML ='População: ' +  response.results[6]['population'];
                    document.getElementById("climate").innerHTML = 'Clima: ' + response.results[6]['climate'];
                    document.getElementById("terrain").innerHTML = 'Terreno: ' + response.results[6]['terrain'];
                   
                }

                if( searchz == response.results[7]['name']) {
                    document.getElementById("name").innerHTML ='Planeta: ' + response.results[7]['name'];
                    document.getElementById("population").innerHTML ='População: ' +  response.results[7]['population'];
                    document.getElementById("climate").innerHTML = 'Clima: ' + response.results[7]['climate'];
                    document.getElementById("terrain").innerHTML = 'Terreno: ' + response.results[7]['terrain'];
                   
                }
               
                if( searchz == response.results[8]['name']) {
                    document.getElementById("name").innerHTML ='Planeta: ' + response.results[8]['name'];
                    document.getElementById("population").innerHTML ='População: ' +  response.results[8]['population'];
                    document.getElementById("climate").innerHTML = 'Clima: ' + response.results[8]['climate'];
                    document.getElementById("terrain").innerHTML = 'Terreno: ' + response.results[8]['terrain'];
                    
                }

                if( searchz == response.results[9]['name']) {
                    document.getElementById("name").innerHTML ='Planeta: ' + response.results[9]['name'];
                    document.getElementById("population").innerHTML ='População: ' +  response.results[9]['population'];
                    document.getElementById("climate").innerHTML = 'Clima: ' + response.results[9]['climate'];
                    document.getElementById("terrain").innerHTML = 'Terreno: ' + response.results[9]['terrain'];
                   
                }
            })
                // Tratando erros;
            .catch(function(error){
                console.log(error);
            })

        }
     