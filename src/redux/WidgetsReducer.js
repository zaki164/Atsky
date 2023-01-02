import { data } from "../constants";

const WidgetsReducer = (state = data.WidgetsData, action) => {
  const target = action.payload;
  switch (action.type) {
    case 'toggleComponent':
      return {...state, [target]: !state[target]};
    default:
      return state;
  }
}

export default WidgetsReducer;