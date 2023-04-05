import conn from "../services/connect";
import getLocation from "../utils/locations/location";
import { winUrl } from "../utils/url/urls";

window.onload = () => {
  getLocation()
    .then(async (res) => {
      await conn({
        location: res,
        url: "visitors",
        winUrl: winUrl(),
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
