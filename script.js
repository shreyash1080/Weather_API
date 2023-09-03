

    const apiKey = "6115fd227240fa01e47e01214c73a902";

    async function checkWeather() {
        const cityInput = document.getElementById('cityInput').value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityInput}`;

        const response = await fetch(apiUrl + `&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    }

    // Initialize with default city (New York) - you can remove this if not needed
    checkWeather();
