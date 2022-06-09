import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const addEventRemove = (buttonId) => {
  const button = document.querySelector(`${buttonId}`);
  button.addEventListener("click", async () => {
    const id = buttonId.substring(9);
    try {
      const response = await axios.delete(
        "https://todolist-restapi-nodejs.herokuapp.com/api/task",
        {
          data: { id },
        }
      );
      if (response.status === 200) {
        Swal.fire(
          "Remove task successfully!",
          "Page will reload to update",
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
  });
};

export default addEventRemove;
