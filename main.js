import "@styles/main.scss";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

// const buttonRemove = document.getElementById("removebtn");
// buttonRemove.addEventListener("click", function () {
//   Swal.fire({
//     title: "Do you want to remove this task?",
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: "Yes",
//     denyButtonText: `No`,
//   }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//       Swal.fire("Removed!", "", "success");
//     } else if (result.isDenied) {
//       Swal.fire("Changes are not saved", "", "info");
//     }
//   });
// });

// const button = document.getElementById("addTask");
// button.addEventListener("click", async function () {
//   const { value: formValues } = await Swal.fire({
//     title: "Add Task",
//     html:
//       '<label for="taskname">Task:</label>' +
//       '<input id="swal-input1" class="swal2-input">' +
//       '<label for="status">Status:</label>' +
//       '<input id="swal-input2" class="swal2-input">',
//     focusConfirm: false,
//     preConfirm: () => {
//       return [
//         document.getElementById("swal-input1").value,
//         document.getElementById("swal-input2").value,
//       ];
//     },
//   });

const getAllTasks = async () => {
  const responseData = await axios.get("http://localhost:3001/api/task");
  const firstTask = responseData.data.data[4];
  const item = `
  <div  class="task--item">
          <div class="task--item__checkbox">
            <input id="checked4" type="checkbox" checked />
          </div>
          <div class="task--item__name"><label for="checked4">${
            firstTask.name
          }</label></div>
          <div class="task--item__status">
            <div class="${firstTask.status.toLowerCase()}">${
    firstTask.status
  }</div>
          </div>
          <div id="removebtn" class="task--item__remove">
            <img src="./source/assets/delete.png" alt="" />
          </div>
        </div>
  `;
  const grid = document.querySelector(".task--grid");
  console.log(grid);
  grid.innerHTML += item;
};

getAllTasks();
