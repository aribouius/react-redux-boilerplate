import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants'

export function incrementCounter(payload) {
  return { type: INCREMENT_COUNTER, payload }
}

export function decrementCounter(payload) {
  return { type: DECREMENT_COUNTER, payload }
}
