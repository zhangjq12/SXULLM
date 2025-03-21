import { deleteCookie, getCookie } from "./cookie";

export const getTicket = () => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get("ticket");
};

export const redirectToAuth = () => {
  window.location.replace(
    `http://10.108.201.199:8081/login.php?from=${window.location.origin}`
  );
};

export const logout = () => {
  sessionStorage.removeItem("auth");
  sessionStorage.removeItem("userName");
  sessionStorage.removeItem("userId");
  sessionStorage.removeItem("userType");
  window.location.replace(
    `http://10.108.201.199:8081/logout.php?from=${window.location.origin}`
  );
};

export const checkSession = () => {
  const userName = getCookie("userName");
  const userId = getCookie("userId");
  const userType = getCookie("type");
  if (!userName && !userId && !userType) return;
  // const userName = docCookies.getItem("userName");
  // const userId = docCookies.getItem("userId");
  // const userType = docCookies.getItem("type");

  deleteCookie("userName");
  deleteCookie("userId");
  deleteCookie("type");

  // docCookies.removeItem("userName");
  // docCookies.removeItem("userId");
  // docCookies.removeItem("type");

  if (
    !sessionStorage.getItem("userId") &&
    !sessionStorage.getItem("userName") &&
    !sessionStorage.getItem("userType")
  ) {
    sessionStorage.setItem("userId", userId);
    sessionStorage.setItem("userName", decodeURI(userName));
    sessionStorage.setItem("userType", userType);
    sessionStorage.setItem("auth", "true");
  }

  document.location.reload();
};
