import {createReducer } from '../../app/common/util/reducerUtil'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

const initialState = {
  data: 37
};

export const incrementCounter = (state, payload) => {
    return { ...state, data: state.data + 1 };
}
export const decrementCounter = (state, payload)=> {
    return { ...state, data: state.data - 1 };

}
export default createReducer(initialState, {
    [INCREMENT_COUNTER] : incrementCounter,
    [DECREMENT_COUNTER] : decrementCounter
})
// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: state.data + 1 };
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data - 1 };
//     default:
//       return state;
//   }
// };

// export default testReducer;
