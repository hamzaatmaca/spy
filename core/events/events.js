import { clickEvents } from "./click/click";
import { keyboardEvents } from "./keyboard/keyboard";
import { submitEvents } from "./submit/submit";

window.addEventListener("load", function () {
  var eventTypes = ["click", "dblclick", "submit", "keypress"];

  eventTypes.forEach(function (eventType) {
    document.addEventListener(eventType, function (event) {
      switch (eventType) {
        case "click":
        case "dblclick":
          clickEvents(event);
          break;
        case "submit":
          submitEvents(event);
          break;
        case "keypress":
          keyboardEvents(event);
          break;
      }
    });
  });
});
