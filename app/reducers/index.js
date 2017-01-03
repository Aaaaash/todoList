import {
  ADD_TODO_ITEM,
  MINUS_TODO_ITEM,
  FINISH_TODO_ITEM,
} from '../constants';

const initialState = {
  todoList: [],
  maxid: 0,
};

function todoReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO_ITEM:
    {
      const newTodo = {
        id: state.maxid + 1,
        text: action.val,
        complate: false,
      };
      state.maxid = newTodo.id;
      state.todoList.push(newTodo);
      return state;
    }
    case MINUS_TODO_ITEM:
      {
        state.todoList = state.todoList.filter((item) => item.id !== action.val);
        return state;
      }
    case FINISH_TODO_ITEM:
      {
        state.todoList.map((item, index) => {
          if (item.id === action.val.id) {
            item.complate = action.val.complate;
          }
        });
        return state;
      }
    default:
      return state;
  };
}

export default todoReducer;
