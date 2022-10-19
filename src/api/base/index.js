import axios from "axios";


const base = 'http://192.168.0.15:8080/Umbnb/';
const headers = {
  'Content-Type': 'application/json',
  'Authorization': ''
};

class Request {
  constructor(url, baseUrl) {
    this.url = url;
    this.baseUrl = baseUrl || base;
    this.request = axios.create({ baseURL: this.baseUrl, headers });
  }

  get() {
    return this.request({ url: this.url});
  }

  getOne(id) {
    return this.request({ url: this.url + '/' + id });
  }

  post(value) {
    return this.request({ url: this.url, method: 'POST', data: value });
  }

  put(id, value) {
    return this.request({ url: this.url + '/' + id, method: 'PUT', data: value });
  }

  delete(id) {
    return this.request({ url: this.url + '/' + id, method: 'DELETE' });
  }
}

export default Request;