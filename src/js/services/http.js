import axios from "axios";

export const HTTPClient = axios.create({
  baseURL: "http://" + process.env.REACT_APP_API_URL + ":8000",
  // baseURL: "http://10.10.100.180:8000",
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: true,
});
