document.getElementById("send-data").addEventListener("submit", async (e) => {
  const formData = new FormData(e.target);
  e.preventDefault();
  await addUser(formData);
  console.log(...formData);
});

async function addUser(formData) {
  try {
    const res = await fetch("https://wcc-api.onrender.com/v1/users", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("WCC Token")}`,
      },
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      //   displayBlogs();
      console.log(data);
    } else {
      const error = await res.json();
      console.error(error);
    }
  } catch (error) {
    console.log(error);
  }
}

// function displayUsers() {
//   let box = "";
//   userContainer.map((user, i) => {
//     box += `
//                 <div>
//                     <div class="border-2 p-4">
//                         <div class="flex justify-between items-start lg:items-center flex-col lg:flex-row ">
//                             <div class="flex gap-2 items-center *:font-semibold *:text-[13px] md:*:text-base">
//                                 <p>الأسم الأول:</p>
//                                 <p>${user.firstName}</p>
//                             </div>
//                             <div class="flex gap-2 items-center *:font-semibold *:text-[13px] md:*:text-base">
//                                 <p>الأسم الأخير:</p>
//                                 <p>${user.lastName}</p>
//                             </div>
//                         </div>
//                         <div class="flex justify-between items-start lg:items-center flex-col lg:flex-row ">
//                             <div class="flex gap-2 items-center *:font-semibold *:text-[13px] md:*:text-base">
//                                 <p>أسم المستخدم:</p>
//                                 <p>${user.userName}</p>
//                             </div>
//                             <div class="flex gap-2 items-center *:font-semibold *:text-[13px] md:*:text-base">
//                                 <p>البريد الألكتروني:</p>
//                                 <p>${user.email}</p>
//                             </div>
//                         </div>
//                         <div class="flex justify-between items-start lg:items-center flex-col lg:flex-row ">
//                             <div class="flex gap-2 items-center *:font-semibold *:text-[13px] md:*:text-base">
//                                 <p>الوظيفة:</p>
//                                 <p>${user.role}</p>
//                             </div>
//                             <div class="flex justify-center items-center  gap-2 *:text-[13px] md:*:text-base">
//                                 <p class="font-semibold">الإجراءات:</p>
//                                 <div class="flex gap-2 items-center">
//                                     <button onclick="updateUser(${i})" data-modal-target="edit-user-modal" data-modal-toggle="edit-user-modal"
//                                         class="flex items-center border-2 border-transparent text-white fill-white rounded-lg bg-yellow-400 p-1 hover:bg-transparent hover:text-yellow-400 hover:border-yellow-400 transition-all duration-500"
//                                         type="button">
//                                         تعديل
//                                         <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
//                                             viewBox="0 0 24 24" fill="currentColor">
//                                             <path
//                                                 d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z">
//                                             </path>
//                                         </svg>
//                                     </button>
//                                     <button onclick="deleteUser(${i})"
//                                         class="flex items-center border-2 border-transparent text-white fill-white rounded-lg bg-red-600 p-1 hover:bg-transparent hover:text-red-600 hover:border-red-600 transition-all duration-500"
//                                         type="button">
//                                         حذف
//                                         <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
//                                             viewBox="0 0 24 24" fill="currentColor">
//                                             <path
//                                                 d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z">
//                                             </path>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//     `;
//   });
//   document.getElementById("users-container").innerHTML = box;
// }
