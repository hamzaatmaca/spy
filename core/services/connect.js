import axios from "axios";

const conn = ({ data, eventType, location, url, winUrl }) => {
  axios
    .post(`http://localhost:3030/logapi/${url}`, {
      data,
      eventType,
      location,
      winUrl,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export default conn;
