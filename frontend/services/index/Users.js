import axios from "axios";

export const signIn = async ({ email, password }) => {
  try {
    const { data } = await axios.post("http://localhost:4000/api/users/login", {
      email,
      password,
    });
    return data;
  } catch (e) {
    if (e.response && e.response.data.message) {
      throw new Error(e.response.data.message);
    }
    throw new Error(e.message);
  }
};

export const signup = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/api/users/register",
      {
        name,
        email,
        password,
      }
    );
    return data;
  } catch (e) {
    if (e.response && e.response.data.message) {
      throw new Error(e.response.data.message);
    }
    throw new Error(e.message);
  }
};
