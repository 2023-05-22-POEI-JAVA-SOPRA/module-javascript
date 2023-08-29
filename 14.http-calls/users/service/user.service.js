import axios from "https://cdnjs.cloudflare.com/ajax/libs/axios/1.5.0/esm/axios.min.js";
import { USERS_URI } from "../../constants.js";

class UserService {
  constructor(axios) {
    this.client = axios;
  }

  fetchAll() {
    return this.client.get(USERS_URI);
  }
}

export const usersService = new UserService(axios);
