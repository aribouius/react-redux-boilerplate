import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../constants'

export default function countReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + action.payload
    case DECREMENT_COUNTER:
      return state - action.payload
    default:
      return state
  }
}
