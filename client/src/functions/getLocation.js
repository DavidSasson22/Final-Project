var position;

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const success = (pos) => {
  position = pos.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${position.latitude}`);
  console.log(`Longitude: ${position.longitude}`);
  console.log(`More or less ${position.accuracy} meters.`);
};

const errors = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

export default async function getLocation() {
  if (navigator.geolocation) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then((result) => {
        if (result.state === "granted") {
          console.log(result.state);
          //If granted then you can directly call your function here
          navigator.geolocation.getCurrentPosition(success);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "denied") {
          //If denied then you have to show instructions to enable location
        }
        result.onchange = function () {
          console.log(result.state);
        };
      });
  } else {
    alert("Sorry Not available!");
  } setTimeout(() => {
    console.log(position);
    return position
  }, 1000);
}