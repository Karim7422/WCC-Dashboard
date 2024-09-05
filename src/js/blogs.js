// document
//   .getElementById("add-blog-btn")
//   .addEventListener("click", blogValidation);
// blogNameInput[0].addEventListener("focusout", blogDescValidation);

// function displayBlogs() {
//   let box = "";
//   blogsContainer.map((blog, i) => {
//     box += `
//           <div>
//             <div class="border-2 border-solid dark:border-white pb-2">
//               <div class="w-full h-48">
//                 <img
//                   class="w-full h-full block"
//                   src="../images/35508.jpg"
//                   alt="blogs-img"
//                 />
//               </div>
//               <p class="font-medium dark:text-white px-2 break-words  overflow-y-auto h-20">
//                 ${blog.blogDesc}
//               </p>
//             </div>

//             <div dir="rtl" class="flex gap-2 my-2">
//               <button
//                 data-modal-target="edit-blog-modal"
//                 data-modal-toggle="edit-blog-modal"
//                 class="flex items-center border-2 border-transparent text-white fill-white rounded-lg bg-yellow-400 p-1 hover:bg-transparent hover:text-yellow-400 hover:border-yellow-400 transition-all duration-500"
//                 type="button"
//                 onclick="updateBlog(${i})"
//               >
//                 تعديل
//                 <svg
//                   width="20"
//                   height="20"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path
//                     d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"
//                   ></path>
//                 </svg>
//               </button>
//               <button
//                 class="flex items-center border-2 border-transparent text-white fill-white rounded-lg bg-red-600 p-1 hover:bg-transparent hover:text-red-600 hover:border-red-600 transition-all duration-500"
//                 type="button"
//                 onclick="deleteBlog(${i})"
//               >
//                 حذف
//                 <svg
//                   width="20"
//                   height="20"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path
//                     d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//   `;
//   });

//   document.getElementById("blogs-container").innerHTML = box;
// }

document.getElementById("send-data").addEventListener("submit", async (e) => {
  const formData = new FormData(e.target);
  e.preventDefault();
  await addBlog(formData);
});

async function addBlog(formData) {
  const res = await fetch("https://wcc-api.onrender.com/v1/blogs", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("WCC Token")}`,
    },
    credentials: "include",
  });

  if (res.ok) {
    const data = await res.json();
    displayBlogs();
    console.log(data);
  } else {
    const error = await res.json();
    console.error(error);
  }
}

async function displayBlogs() {
  const response = await fetch("https://wcc-api.onrender.com/v1/blogs");
  if (response.ok) {
    let box = "";
    const data = await response.json();
    console.log(data);
    data?.data?.blogs?.forEach((blog) => {
      box += `
                <div>
                  <div class="border-2 border-solid dark:border-white pb-2">
                    <div class="w-full h-48">
                      <img
                        class="w-full h-full block"
                        src="${blog.image}"
                        alt="blogs-img"
                      />
                    </div>
                    <p class="font-medium dark:text-white px-2 break-words  overflow-y-auto h-20">
                      ${blog.description}
                    </p>
                  </div>
  
                  <div dir="rtl" class="flex gap-2 my-2">
                    <button
                      data-modal-target="edit-blog-modal"
                      data-modal-toggle="edit-blog-modal"
                      class="flex items-center border-2 border-transparent text-white fill-white rounded-lg bg-yellow-400 p-1 hover:bg-transparent hover:text-yellow-400 hover:border-yellow-400 transition-all duration-500"
                      type="button"
                      onclick="document.getElementById('update-data').setAttribute('data-blog-id', '${blog._id}')"
                    >
                      تعديل
                      <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      class="flex items-center border-2 border-transparent text-white fill-white rounded-lg bg-red-600 p-1 hover:bg-transparent hover:text-red-600 hover:border-red-600 transition-all duration-500"
                      type="button"
                      onclick="deleteBlog('${blog._id}')"
                    >
                      حذف
                      <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
        `;
    });
    document.getElementById("blogs-container").innerHTML = box;
  } else {
    const error = await response.json();
    console.error(error);
  }
}

displayBlogs();

document.getElementById("update-data").addEventListener("submit", async (e) => {
  const formData = new FormData(e.target);
  const blogId = e.target.getAttribute("data-blog-id");
  e.preventDefault();
  await updateBlog(blogId, formData);
});

async function updateBlog(blogId, formData) {
  const res = await fetch(`https://wcc-api.onrender.com/v1/blogs/${blogId}`, {
    method: "PATCH",
    body: formData,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("WCC Token")}`,
    },
    credentials: "include",
  });
  if (res.ok) {
    displayBlogs();
  } else {
    const error = await res.json();
    console.error(error);
  }
}

async function deleteBlog(blogId) {
  const response = await fetch(
    `https://wcc-api.onrender.com/v1/blogs/${blogId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("WCC Token")}`,
      },
      credentials: "include",
    }
  );
  if (response.ok) {
    displayBlogs();
  } else {
    const error = await response.json();
    console.error(error);
  }
}
