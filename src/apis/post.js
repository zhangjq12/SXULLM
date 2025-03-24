export const registerOpenai = async (auth) => {
  const response = await fetch("http://10.108.201.199:8080/api/v1/auths/add", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(auth),
  });
  return response.json();
};

export const registerDify = async (auth) => {
  const response = await fetch(
    "http://10.108.201.199:3000/console/api/signuplogin",
    {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(auth),
    }
  );
  return response.json();
};
