const welcomeUser = document.getElementById("welcome-user");
async function getUserName() {
  const res = await fetch(
    "https://wcc-api.onrender.com/v1/auth/login/token",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("WCC Token")}`,
      },
    },
    {
      credentials: "include",
    }
  );
  if (res.ok) {
    const data = await res.json();
    // console.log(data);
    welcomeUser.innerHTML = `مرحباً ${data.data.user.fullName}`;
  } else {
    const errorData = await res.json();
    console.log(errorData);
  }
}

getUserName();
const logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", () => {
  logout();
});
async function logout() {
  const response = await fetch(
    "https://wcc-api.onrender.com/v1/auth/logout",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("WCC Token")}`,
      },
    },
    {
      credentials: "include",
    }
  );
  if (response.ok) {
    const data = await response.json();
    localStorage.removeItem("WCC Token");
    location.href = "../../Authentication/login.html";
    console.log(data);
  } else {
    const errorData = await response.json();
    console.log(errorData);
  }
}
