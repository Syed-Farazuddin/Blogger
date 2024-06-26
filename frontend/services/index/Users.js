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

export const getUserProfile = async ({ token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "http://localhost:4000/api/users/profile",
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updateProfile = async ({ token, userData }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      "http://localhost:4000/api/users/updateProfile",
      userData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
