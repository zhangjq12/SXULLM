import { deleteCookie, getCookie } from "./cookie";

export const getTicket = () => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get("ticket");
};

export const redirectToAuth = () => {
  window.location.replace(
    `http://${window.location.hostname}:8081/login.php?from=${window.location.origin}`
  );
};

export const logout = () => {
  sessionStorage.removeItem("auth");
  sessionStorage.removeItem("userName");
  sessionStorage.removeItem("userId");
  sessionStorage.removeItem("userType");
  window.location.replace(
    `http://${window.location.hostname}:8081/logout.php?from=${window.location.origin}`
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

export const generateRegisterData = (env) => {
  const uid = sessionStorage.getItem("userId");
  const name = sessionStorage.getItem("userName");
  const type = sessionStorage.getItem("userType");

  let postfix = "@email.sxu.edu.cn";

  if (type === "faculty") postfix = "@sxu.edu.cn";

  const email = uid + postfix;
  return {
    name,
    email,
    password: 'abcd1234',
    env
  }
};

export const difyLogin = () => {
  const iframe = document.createElement('iframe')
  iframe.id = 'difySignUpLogin'
  iframe.src = `http://${window.location.hostname}:8230/signupLogin`
  iframe.onload = () => {
    iframe.contentWindow.postMessage(generateRegisterData('developer'), `http://${window.location.hostname}:8230`);
  }
  iframe.style = "width: 0; height: 0; display: none"
  document.body.appendChild(iframe)
}
