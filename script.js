let lat;
let long;
let API_KEY = "1c18bdc3e52a15f56b3af6951038e572";
document.getElementById("fetch_data").addEventListener("click", () => {
  
  
 document.getElementById("fetch_data").style.display="none";
 

    // get the lat and long
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log("lat", lat, "long", long);
        // fetch
        document.body.innerHTML += `<p style="text-align: center;"><br/><br/><iframe src="https://maps.google.com/maps?q=${lat}, ${long}&z=15&output=embed" width="600" height="300" frameborder="0"></iframe></p>`;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            document.body.innerHTML += `
            <br/><br/>
            <center>
            
            <p>Location : ${data.name}</p></b>
            <p><b>${lat}, ${long}</p></b>
            <p><b>Timezone: ${data.timezone}</p></b>
            <p><b>Windspeed: ${data.wind.speed}</p></b>
            <p><b>Humidity: ${data.main.humidity}</p></b>
            <p><b>Wind direction(in deg): ${data.wind.deg}</p></b>
            <p><b>Feels like: ${data.main.feels_like}</p></b>
            </center>
            `;
          });
      },
      (error) => {
        alert(error);
      }
    );
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
});

//   function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
//   }