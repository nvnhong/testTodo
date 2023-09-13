import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    title: "열라면 먹고 싶다",
    content: "열라면 4개 한 번에 먹고 싶다",
    isDone: false,
  },
  {
    id: uuid(),
    title: "피자먹기",
    content: "치즈크러스트는 꼭 추기하기",
    isDone: true,
  },
];

const TODO_ADD = "todos/TODO_ADD";
const TODO_UPDATE = "todos/TODO_UPDATE";
const TODO_REMOVE = "todos/TODO_REMOVE";

const todos = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todos;
