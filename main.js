import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import "@styles/main.scss";
import addEventRemove from "@scripts/remove.js";

const addTaskButton = document.querySelector("#add--task");
const removeButtonArray = [];

const getAllTasks = async () => {
  const responseData = await axios.get("http://localhost:3001/api/task");
  const grid = document.querySelector(".task--grid");
  grid.innerHTML = "";
  for (const item of responseData.data.data) {
    const itemGrid = `
    <div class="task--item" id="${item._id}">
            <div class="task--item__checkbox">
              <input id="checked${item._id}" type="checkbox" />
            </div>
            <div class="task--item__name"><label for="checked${item._id}">${
      item.name
    }</label></div>
            <div class="task--item__status">
              <div class="${item.status.toLowerCase()}">${item.status}</div>
            </div>
            <div class="task--item__remove">
              <img src="./source/assets/delete.png" alt="" class="remove--btn" id="remove--${
                item._id
              }" />
            </div>
          </div>
    `;
    grid.innerHTML += itemGrid;
    removeButtonArray.push(`#remove--${item._id}`);
  }
};

addTaskButton.addEventListener("click", async () => {
  const { value: formValues } = await Swal.fire({
    title: "Add new task",
    html:
      "<div class='input--task'>Task</div>" +
      '<input id="swal-input1" class="swal2-input">' +
      "<div class='input--status'>Status</div>" +
      `
        <select name="status" id="swal-input2">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      `,
    focusConfirm: false,
    preConfirm: () => {
      return {
        name: document.getElementById("swal-input1").value,
        status: document.getElementById("swal-input2").value,
      };
    },
  });

  if (formValues) {
    if (formValues.name === "" || formValues.status === "") {
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/api/task", {
        name: formValues.name,
        status: formValues.status,
      });
      if (response.status === 200) {
        Swal.fire(
          "Add task successfully!",
          "Complete the task make you improve",
          "success"
        ).then((result) => {
          if (result.isConfirmed) {
            document.location.reload();
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
});

const removeButtonAction = async () => {
  for (const buttonId of removeButtonArray) {
    addEventRemove(buttonId);
  }
};

await getAllTasks();
await removeButtonAction();
