const mainArray = [
  {
    id: "675284ea-41bf-47e2-a527-16fef147eaaa",
    title: "Task 1",
    completed: false,
    timestamp: "1778368485727",
  },
  {
    id: "8e541ffb-45c6-464e-8653-517a34bacc57",
    title: "Task 2",
    completed: false,
    timestamp: "1778368485727",
  },
  {
    id: "8c89029c-5dbe-434f-ac0e-9c940828331e",
    title: "Task 3",
    completed: false,
    timestamp: "1778368485727",
  },
  {
    id: "616b0d88-e3ee-44fd-9b8d-4be03bfbd41f",
    title: "Task 4",
    completed: false,
    timestamp: "1778368485727",
  },
  {
    id: "9ea8aa52-f59b-46fd-b76c-52a567b58619",
    title: "Task 5",
    completed: false,
    timestamp: "1778368485727",
  },
];

const getTaskIndex = (arr, id) => {
  return arr.findIndex((item) => item.id === id);
};

let taskIndex = getTaskIndex(mainArray, "9ea8aa52-f59b-46fd-b76c-52a567b58619");
console.log(taskIndex);
