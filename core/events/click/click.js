import conn from "../../services/connect";
import getLocation from "../../utils/locations/location";
import { winUrl } from "../../utils/url/urls";

export const clickEvents = (event) => {
  getLocation()
    .then((res) => {
      conn({
        data: event.target.innerHTML,
        eventType: "click",
        location: res,
        url: "clicks",
        winUrl: winUrl(),
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
