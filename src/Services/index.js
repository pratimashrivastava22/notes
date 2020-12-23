import { api } from './Api'; 

const services = {
  login(payload) {
    var endpoint = 'users/auth';
    return api('POST', endpoint, payload);
  },
}

export default services;