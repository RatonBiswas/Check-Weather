class OpenWeather{
    constructor() {
        this.apikey = '78ed1bb017ae2feda65ded60b39dae01';
    }
    async search(cityName) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apikey}`);
        const results = await response.json();
        return results;

    }
}