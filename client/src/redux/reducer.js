import { ADD_WORD } from "./types";

const INITIAL_STATE = {
  words: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WORD:
      return { ...state, words: [...state.words, action.payload] }
      break
    default:
      return state;
      break;
  }
}

export default reducer;