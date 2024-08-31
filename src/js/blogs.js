const blogNameInput = document.querySelectorAll(".blogs-desc");
const worningTextBlogs = document.querySelectorAll(".text-worning-blogs");
const blogNameRegex = /^[a-zA-Z\u0600-\u06FF\s]{2,}$/;
const blogsContainer = JSON.parse(localStorage.getItem("Blogs Data")) || [];

let blogIndex;
function addBlogsToStorage() {
  const blog = {
    blogDesc: blogNameInput[0].value,
  };
  blogsContainer.push(blog);
  localStorage.setItem("Blogs Data", JSON.stringify(blogsContainer));
  displayBlogs();
}

function blogValidation() {
  if (blogNameRegex.test(blogNameInput[0].value)) {
    addBlogsToStorage();

    alert("تم إضافة المدونة بنجاح!");
    blogNameInput[0].value = "";
    blogNameInput[0].classList.remove("border-green-500");
  } else {
    blogDescValidation();
  }
}

function blogDescValidation() {
  if (blogNameRegex.test(blogNameInput[0].value)) {
    blogNameInput[0].classList.add("border-green-500");
    blogNameInput[0].classList.remove("border-red-600");
    worningTextBlogs[0].classList.add("hidden");
  } else {
    blogNameInput[0].classList.remove("border-green-500");
    blogNameInput[0].classList.add("border-red-600");
    worningTextBlogs[0].classList.remove("hidden");
  }
}

document
  .getElementById("add-blog-btn")
  .addEventListener("click", blogValidation);
blogNameInput[0].addEventListener("focusout", blogDescValidation);

function displayBlogs() {
  let box = "";
  blogsContainer.map((blog, i) => {
    box += `
          <div>
            <div class="border-2 border-solid dark:border-white pb-2">
              <div class="w-full h-48">
                <img
                  class="w-full h-full block"
                  src="../images/35508.jpg"
                  alt="blogs-img"
                />
              </div>
              <p class="font-medium dark:text-white px-2 break-words  overflow-y-auto h-20">
                ${blog.blogDesc}
              </p>
            </div>

            <div dir="rtl" class="flex gap-2 my-2">
              <button
                data-modal-target="edit-blog-modal"
                data-modal-toggle="edit-blog-modal"
                class="flex items-center border-2 border-transparent text-white fill-white rounded-lg bg-yellow-400 p-1 hover:bg-transparent hover:text-yellow-400 hover:border-yellow-400 transition-all duration-500"
                type="button"
                onclick="updateBlog(${i})"
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
                onclick="deleteBlog(${i})"
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
}
displayBlogs();

function updateBlog(blog) {
  blogNameInput[1].value = blogsContainer[blog].blogDesc;
  blogIndex = blog;
  displayBlogs();
}
function pushUpdateBlog() {
  alert("تم تعديل المدونة بنجاح");
  const blog = {
    blogDesc: blogNameInput[1].value,
  };
  blogsContainer.splice(blogIndex, 1, blog);
  localStorage.setItem("Blogs Data", JSON.stringify(blogsContainer));
  displayBlogs();
}

function deleteBlog(blog) {
  blogsContainer.splice(blog, 1);
  localStorage.setItem("Blogs Data", JSON.stringify(blogsContainer));
  displayBlogs();
}
