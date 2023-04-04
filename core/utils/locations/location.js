const getLocation = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          resolve({ latitude, longitude });
        },
        () => {
          reject("error");
        }
      );
    } else {
      reject("geolocation is not avaliable");
    }
  });
};

export default getLocation;
