import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux'
import count from './count'

export default combineReducers({
  routing,
  count
})
