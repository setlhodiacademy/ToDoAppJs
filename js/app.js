window.addEventListener("DOMContentLoaded", (event) => {
  let taskDataCollection = [];

  let taskStatus = document.querySelector("#taskStatus");
  let submitButton = document.querySelector("#submitButton");
  let taskTableBody = document.querySelector("#taskTableBody");
  let status = "";

  taskStatus.addEventListener("change", (e) => {
    status = e.target.value;
  });

  submitButton.addEventListener("click", (e) => {
    let taskData = setFormData();
    taskDataCollection.push(taskData);
    renderTaskTable();
  });

  function setFormData() {
    let taskData = {};
    taskData.taskName = document.querySelector("#taskName").value;
    taskData.startDate = document.querySelector("#startDate").value;
    taskData.endDate = document.querySelector("#endDate").value;
    taskData.taskStatus = status;

    return taskData;
  }

  function renderTaskTable() {
    let tableRow = "";
    taskDataCollection.map((task, index) => {
      tableRow += `
            <tr>
                <td>${index + 1}</td>
                <td>${task.taskName}</td>
                <td>${task.startDate}</td>
                <td>${task.endDate}</td>
                <td>${task.taskStatus}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
     `;
    });
    taskTableBody.innerHTML = tableRow;
  }
});
