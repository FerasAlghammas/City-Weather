

let buttSearch = document.getElementById("fetchSearch");



buttSearch.addEventListener("click" , function(){


    let SearchText = document.querySelector('#SearchBar').value;


    fetchWeatherAPI(SearchText);
});


function fetchWeatherAPI(keyword){

    if(!keyword){
        return;
    }

    var apikey = "ea6ae17bbd2b439bb44200405242110";
    var url = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${keyword}&days=1`;


    fetch(url)
    .then( (Response) => {
        return Response.json();
    })

    .then( (data) => {
        processResp(data);
    })

    .catch((e) => {
        console.error(e);
    });
    
};


function processResp(data){

    if(data){
        document.getElementById('High').textContent = data.current.temp_c + '°C';
        document.getElementById('Low').textContent = data.current.temp_c- 5 + '°C';
        document.getElementById('WindSpeed').textContent = data.current.wind_kph + ' kph';
    };
};

