export const actionType = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
};
let ids = 0;
export const addTodo = (todo, desc) => {
  return {
    type: actionType.ADD_TODO,
    payload: { id: ++ids, todo, desc, visible: true },
  };
};

export const deleteTodo = (id) => {
  return {
    type: actionType.DELETE_TODO,
    payload: { id },
  };
};
