export async function registerUser(username, password) {
  fetch(
    "https://strangers-things.herokuapp.com/api/2209-pt-ftb-web-ft/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  );
  const result = await response.json();
  return result;
}

export async function fetchMe() {
  fetch(
    "https://strangers-things.herokuapp.com/api/2209-pt-ftb-web-ft/users/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
}
