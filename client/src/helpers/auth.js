import cookie from "js-cookie";

// Set in cookie
export const setCookie = (key, value) => {
  if (window !== "undefiend") {
    cookie.set(key, value, {
      // 1 Day
      expires: 1,
    });
  }
};

// Remove from cookie
export const removeCookie = (key) => {
  if (window !== "") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

// Get from cookie like token
export const getCookie = (key) => {
  if (window !== "undefiend") {
    return cookie.get(key);
  }
};

// Set in  localstorage

export const setLocalStorage = (key, value) => {
  if (window !== "undefiend") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Remove from localstorage

export const removeLocalStorage = (key) => {
  if (window !== "undefiend") {
    localStorage.removeItem(key);
  }
};

// Auth user after login
export const authenticate = (response, next) => {
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
};

//Signout
export const signout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
};

// Get user info from localstorage
export const isAuth = () => {
  if (window !== "undefiend") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

// update user data in localstorage
export const updateUser = (response, next) => {
  if (window !== "undefiend") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = response.data;
    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};
