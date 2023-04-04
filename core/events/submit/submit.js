import conn from "../../services/connect";
import getLocation from "../../utils/locations/location";
import { winUrl } from "../../utils/url/urls";

export const submitEvents = (event) => {
  let formData = [];

  for (let i = 0; i < event.srcElement.length; i++) {
    formData.push(event.srcElement[i].value);
  }

  getLocation()
    .then((res) => {
      conn({
        data: formData,
        eventType: "submit",
        location: res,
        url: "submit",
        winUrl: winUrl(),
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
