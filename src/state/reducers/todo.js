import { actionType } from "../actions";

const initialState = {
  allId: [],
  byId: {},
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TODO: {
      const { id, todo, desc, visible } = action.payload;
      return {
        ...state,
        allId: [...state.allId, id],
        byId: {
          ...state.byId,
          [id]: {
            todo,
            desc,
            visible,
          },
        },
      };
    }
    case actionType.DELETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            visible: !state.byId[id].visible,
          },
        },
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
