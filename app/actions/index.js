import {
  ADD_TODO_ITEM,
  MINUS_TODO_ITEM,
  FINISH_TODO_ITEM,
} from '../constants';

export function addTodoItem(val) {
  return {
    type: ADD_TODO_ITEM,
    val,
  };
}

export function minusTodoItem(val) {
  return {
    type: MINUS_TODO_ITEM,
    val,
  };
}

export function finishTodoItem(val) {
  return {
    type: FINISH_TODO_ITEM,
    val,
  };
}
