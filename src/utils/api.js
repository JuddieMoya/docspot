import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    const axiosInstance = axios.create({
      baseURL: "https://kapstone-n.firebaseio.com",
      timeout: 30000,
      headers: {
        Authorization: `Bearer ${getToken()}`
      },
    });

    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    axiosInstance.interceptors.response.use(
      ({
        data
      }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  async login({
    username,
    password
  }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async fetchUsers() {
    try {
      const result = await this.axiosInstance.get("/users");
      return result.users;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async fetchCurrentUser(username) {
    try {
      const result = await this.axiosInstance.get(`/users/${username}`);
      return result
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  async lang(id) {
    console.log(id, "here")
    try {
      const res = await this.axiosInstance(`/lang/${id}`);
      console.log(res)
      return res;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  async uploadProfilePic(username, image) {
    console.log(image)
    try {
      const result = await this.axiosInstance.put(`/users/${username}/picture`, image);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  
  async fetchUsername() {
    try {
      const res = await this.axiosInstance.delete(`/profile/`);
      return res;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async createUser(payload) {
    try {
      console.log("api going")
      return await this.axiosInstance.post("/users", payload);
    } catch (err) {
      console.log("api failed")
      helpMeInstructor(err);
      console.log(err);
      throw err;
    }
  }

  async deleteUser(username) {
    try {
      return await this.axiosInstance.delete(`/users/${username}`);
    } catch (err) {
      helpMeInstructor(err);
      console.log(err);
      throw err;
    }
  }

  async getMessageList ({ limit, offset }) {
    try {
      const result = await this.axiosInstance.get(
        "/messages?limit=" + limit + "&offset=" + offset,
        {
          limit,
          offset,
        }
      );
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async sex(count, limit) {
    try {
      const data = await this.axiosInstance.get(`/sex?limit=${limit}&offset=${count}`);
      return data;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async tobaccoUse(id) {
    try {
      console.log(typeof (id))
      id = parseInt(id)
      return await this.axiosInstance.post("/tobaccoUse", {
        "messageId": id

      });
    } catch (err) {
      helpMeInstructor(err);
      console.log(err);
      throw err;
    }
  }
  async sexuallyActive(profile) {
    try {
      const data = await this.axiosInstance.get(`/profile/`);
      return data;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  
  async pregnant(profile) {
    console.log(profile)
    try {
      const data = await this.axiosInstance.post(`/profile`, {})
      return data;
    } catch (err) {
      helpMeInstructor(err);
      console.log(err)
      throw (err);
    }
  }

}


// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs ???????? https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs ???????? https://github.com/axios/axios
    TODO: troll students
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
