console.log("Akshit Thakur");

const API_key = "d405ca9ad9568c818ea8b48d88ae25de";

async function fetchWeatherDetails(){
    // let latitutde = 15.3333;
    // let longitude = 74.0833;
    try{
        let city = "goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
        const data = await response.json();
        console.log("Weather Data: ", data);
    
        // let newPara = document.createElement('p');
        // newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;
        // document.body.appendChild(newPara);

        renderWeatherInfo(data);
    }
     catch(err){
        //handle the error here
    }



    
} 

async function getCustomWeatherDetails(){
    try{
        let latitude = 15.6333;
        let longitude = 18.3333;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`);
        let data = await result.json();
        
        console.log(data);
    }
    catch(err){
        console.log("Error Found", err); 
    }
   
}
function switchTab(newTab) {
    notFound.classList.remove("active");
    // check if newTab is already selected or not 
    if (currentTab != newTab) {
        currentTab.classList.remove("currentTab");
        currentTab = newTab;
        currentTab.classList.add("currentTab");

        // Check which TAb is Selected - search / your

        // If Search Form not contains active class then add  [Search Weather]
        if (!searchForm.classList.contains("active")) {
            searchForm.classList.add("active");
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
        }
        // Your Weather
        else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        grantAccessButton.style.display = 'none';
    }
}
function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };
    sessionStorage.setItem("userCoordinates", JSON.stringify(userCoordinates));
    fetchWeatherInfo(userCoordinates);
}