document.getElementById("send-data").addEventListener("submit", async (e) => {
  const formData = new FormData(e.target);
  e.preventDefault();
  await addProject(formData);
});

async function addProject(formData) {
  const res = await fetch("https://wcc-api.onrender.com/v1/projects", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("WCC Token")}`,
    },
    credentials: "include",
  });

  if (res.ok) {
    displayProjects();
    const data = await res.json();
    console.log(data);
  } else {
    const error = await res.json();
    console.error(error);
  }
}

async function displayProjects() {
  const response = await fetch("https://wcc-api.onrender.com/v1/projects");
  if (response.ok) {
    let box = "";
    const data = await response.json();
    console.log(data);
    data?.data?.projects?.forEach((project) => {
      box += `
        <div>
          <div class="relative">
            <img src="${project.image}" />
            <span class="absolute text-[10px] xl:text-sm bottom-0 bg-zinc-500 text-stone-200 dark:bg-neutral-500 font-medium w-full px-4 py-2 ">${project.description}</span>
            <span class="absolute flex items-center gap-1 text-[10px] xl:text-sm top-0 right-0 bg-zinc-500 text-stone-200 dark:bg-neutral-500 font-medium px-4 py-2">
              <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg>
              ${project.location}
            </span>
          </div>
          <div dir="rtl" class="flex gap-2 my-2">
            <button
              data-modal-target="edit-project-modal"
              data-modal-toggle="edit-project-modal"
              class="flex items-center border-2 border-transparent text-white fill-white rounded-lg bg-yellow-400 p-1 hover:bg-transparent hover:text-yellow-400 hover:border-yellow-400 transition-all duration-500"
              type="button"
              onclick="document.getElementById('update-data').setAttribute('data-project-id', '${project._id}')"
            >
              تعديل
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path>
              </svg>
            </button>
            <button
              class="flex items-center border-2 border-transparent text-white fill-white rounded-lg bg-red-600 p-1 hover:bg-transparent hover:text-red-600 hover:border-red-600 transition-all duration-500"
              type="button"
              onclick="deleteProject('${project._id}')"
            >
              حذف
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
    });
    document.getElementById("projects-container").innerHTML = box;
  } else {
    const error = await response.json();
    console.error(error);
  }
}

displayProjects();

document.getElementById("update-data").addEventListener("submit", async (e) => {
  const formData = new FormData(e.target);
  const projectId = e.target.getAttribute("data-project-id");
  e.preventDefault();
  await updateProject(projectId, formData);
});

async function updateProject(projectId, formData) {
  const res = await fetch(
    `https://wcc-api.onrender.com/v1/projects/${projectId}`,
    {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("WCC Token")}`,
      },
      credentials: "include",
    }
  );
  if (res.ok) {
    displayProjects();
  } else {
    const error = await res.json();
    console.error(error);
  }
}

async function deleteProject(projectId) {
  const response = await fetch(
    `https://wcc-api.onrender.com/v1/projects/${projectId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("WCC Token")}`,
      },
      credentials: "include",
    }
  );
  if (response.ok) {
    displayProjects();
  } else {
    const error = await response.json();
    console.error(error);
  }
}
