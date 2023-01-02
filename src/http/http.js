import axios from "axios";
const API_KEY = "AIzaSyAqqvviKQUnbNyg7B0zenzsJSJQWkvGbYM";

export const auth = async (action, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${action}?key=${API_KEY}`;
  const data = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  console.log(data);
};

export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`; // mode = "signUp" or "signInWithPassword"

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
};
