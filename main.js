import '@styles/main.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

const buttonRemove = document.getElementById('removebtn')
buttonRemove.addEventListener("click", function(){
    Swal.fire({
        title: 'Do you want to remove this task?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Removed!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
})

const button = document.getElementById('addTask')
button.addEventListener("click", async function(){
  const { value: formValues } = await Swal.fire({
  title: 'Add Task',
  html:
    '<label for="taskname">Task:</label>' +
    '<input id="swal-input1" class="swal2-input">' +
    '<label for="status">Status:</label>' +
    '<input id="swal-input2" class="swal2-input">',
  focusConfirm: false,
  preConfirm: () => {
    return [
      document.getElementById('swal-input1').value,
      document.getElementById('swal-input2').value
    ]
  }
})

if (formValues) {
  Swal.fire(JSON.stringify(formValues))
}
})