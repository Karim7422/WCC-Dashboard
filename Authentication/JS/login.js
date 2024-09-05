const loginUserNameInput = document.getElementById("user-name");
const loginPasswordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const loginTextWrong = document.getElementById("login-text-wrong");

loginBtn.addEventListener("click", () => {
  login();
});
async function login() {
  try {
    const response = await fetch("https://wcc-api.onrender.com/v1/auth/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginUserNameInput.value,
        password: loginPasswordInput.value,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      localStorage.setItem("WCC Token", data.data.token);
      location.href = "../../index.html";
    } else {
      const errorData = await response.json();
      loginTextWrong.innerHTML = errorData.message;
    }
  } catch (error) {
    loginTextWrong.innerHTML = error;
  }
}
