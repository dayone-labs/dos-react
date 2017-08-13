import {
	createStore,
	applyMiddleware,
	combineReducers,
} from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'


export default {
	initialize: (reducers, devTools) => {
		const reducer = combineReducers(reducers)
		let middleware = applyMiddleware(thunk, promiseMiddleware())
		if(devTools) {
			middleware = devTools(middleware)
		}
			
		return createStore(reducer, middleware)
	}
}