import store from './store.prod'

export default {
	initialize: (reducers) => (
		store.initialize(reducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
	)
}
