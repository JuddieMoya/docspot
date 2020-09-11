import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: {
        Authorization: `Bearer ${getToken()}`
      },
    });

    // Add a request interceptor to attach a
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

    // Add a response interceptor
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


 
  async deleteMessage(id) {
    console.log(id, "here")
    try{
      const res = await this.axiosInstance.delete(`/messages/${id}`);
      console.log(res)
        return res;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async fetchUsername(username) {
    try {
      const result = await this.axiosInstance.get(`/users/${username}`);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }
  async createUser(payload) {
    try {
      return await this.axiosInstance.post("/users", payload);
    } catch (err) {
      helpMeInstructor(err);
      console.log(err);
      throw err;
    }
  }
  async getMessages(count, limit) {
    try {
      const data = await this.axiosInstance.get(`/messages?limit=${limit}&offset=${count}`);
      return data;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }

  async addLike(id) {
    try {
      console.log(typeof (id))
      id = parseInt(id)
      return await this.axiosInstance.post("/likes", {
        "messageId": id

      });
    } catch (err) {
      helpMeInstructor(err);
      console.log(err);
      throw err;
    }
  }
  async getOneMessage(messageId) {
    try {
      const data = await this.axiosInstance.get(`/messages/${messageId}`);
      return data;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
    }
  }


  async postMessages(messages) {
    console.log(messages)
    try {
      const data = await this.axiosInstance.post(`/messages`, {text:messages})
      return data;
    } catch (err) {
      helpMeInstructor(err);
      throw err;
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
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
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