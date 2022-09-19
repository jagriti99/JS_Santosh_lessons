class Tasks {
  constructor() {
    this.tasks = [];
  }

  /** @param {string} csvString */
<<<<<<< HEAD
  importCsv(csvString) {
    this.tasks = csvString.split(",");
  }

  getCount() {
    return this.tasks.length;
  }
  getFirst() {
    return this.tasks[0];
  }
  getLast() {
    return this.tasks[this.tasks.length - 1];
  }
  getUnformattedTasks() {
    // return this.task.map(e=> e.toLowerCase());
    return this.tasks.join(",").toLowerCase();
  }
}
//Sample usage do not modify (but feel free to read)
const dropdown = document.querySelector("#csv-dropdown");
const tbody = document.querySelector("#tbody");
=======
  importCsv(csvString) {}
}

//Sample usage do not modify (but feel free to read)
const dropdown = document.querySelector('#csv-dropdown');
const tbody = document.querySelector('#tbody');
>>>>>>> 95c158372879d20d0ab673503efa97684429676b

const tasks = new Tasks();

function render() {
<<<<<<< HEAD
  tbody.innerHTML = "";
  tasks.tasks.forEach(function (task) {
    tbody.insertAdjacentHTML(
      "beforeend",
=======
  tbody.innerHTML = '';
  tasks.tasks.forEach(function (task) {
    tbody.insertAdjacentHTML(
      'beforeend',
>>>>>>> 95c158372879d20d0ab673503efa97684429676b
      `<tr>
            <th>Task</th>
            <td>${task}</td>
        </tr>`
    );
  });
  tbody.insertAdjacentHTML(
<<<<<<< HEAD
    "beforeend",
=======
    'beforeend',
>>>>>>> 95c158372879d20d0ab673503efa97684429676b
    `<tr class="separator">
            <th>Number of tasks</th>
            <td>${tasks.getCount()}</td>
        </tr>
        <tr>
            <th>First task</th>
            <td>${tasks.getFirst()}</td>
        </tr>
        <tr>
            <th>Last task</th>
            <td>${tasks.getLast()}</td>
        </tr>
        <tr>
            <th>Lower-cased tasks</th>
            <td>${tasks.getUnformattedTasks()}</td>
        </tr>
        `
  );
}

<<<<<<< HEAD
dropdown.addEventListener("change", (event) => {
=======
dropdown.addEventListener('change', (event) => {
>>>>>>> 95c158372879d20d0ab673503efa97684429676b
  tasks.importCsv(dropdown.value);
  render();
});
