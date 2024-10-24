const loginapi = "http://127.0.0.1:8000/api/v1/auth/login/";

async function AuthServices(email, password) {
  const response = await fetch(loginapi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json(); // Get detailed error message if available
    throw new Error(errorData.message || "Login failed");
  }

  const responseData = await response.json(); // Get the response data

  if (responseData.success) {
    const { refresh, access, email } = responseData.data;

    // Store tokens and user information in local storage
    localStorage.setItem("refresh_token", refresh);
    localStorage.setItem("access_token", access);
    localStorage.setItem("user_email", email);
  }

  return responseData; // Return the full response data for further use if needed
}

export default AuthServices;
