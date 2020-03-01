//init open weather

const getWeather = new OpenWeather();


//init open ui 
const ui = new UI();
//Search City 
const searchCity = document.querySelector('.searchCity');
//add Event Listener
searchCity.addEventListener('keyup', (event) => {

    //Get Input

    const userTest = event.target.value;

    //console.log(userTest);

    //Make a Request to open weather API 

    getWeather.search(userTest).then(data => {
        //console.log(data);

        //temp conversion

        const degc = data.main.temp - 273.15;
        const degCr = Math.floor(degc);
        const degf = degc * 1.8 + 32;
        const degFr = Math.floor(degf);

        results = {
            condition: data.weather[0].main,
            icon: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
            degCr: Math.floor(degCr),
            degFr: Math.floor(degFr),
            city: data.name
        }

        //display results 

        ui.showResults(results);


    });


})