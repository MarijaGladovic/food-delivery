const getTokenFromStorage = () => localStorage.getItem("auth:token");

const decodeJwt = (token) => {
  if (!token) return null;
  const jwt = token.split(".")[1].replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(jwt));
};

const isAuth = () => {
  if (!getTokenFromStorage() || getTokenFromStorage() === "") {
    return false;
  }

  const decodedToken = decodeJwt(getTokenFromStorage());
  if (new Date().valueOf() / 1000 > decodedToken.exp) {
    localStorage.removeItem("auth:token");
    return false;
  }

  return true;
};

export { decodeJwt, isAuth };
