import axios from "axios";

const http = axios.create({
  baseURL: "https://team-68324-default-rtdb.europe-west1.firebasedatabase.app/",
});

http.interceptors.request.use(
  async function (config) {
    const containSlash = /\/$/gi.test(config.url);
    config.url = containSlash
      ? config.url.slice(0, -1) + ".json"
      : config.url + ".json";
    return config;
  },
  function (error) {
    Promise.reject(error);
  }
);
function transformData(data) {
  return data && !data.id
    ? Object.keys(data).map((key) => ({ ...data[key] }))
    : data;
}
http.interceptors.response.use(
  (res) => {
    res.data = { content: transformData(res.data) };
    return res;
  },
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedErrors) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
};

export default httpService;
