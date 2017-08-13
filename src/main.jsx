import 'babel-polyfill'
import 'normalize.css'
import 'main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {
	Route,
	BrowserRouter as Router
} from 'react-router-dom'
import I18Context from 'i18-context'
import store from 'store'
import * as home from 'home'

const reducers = {

}

const reduxStore = store.initialize(reducers)

const Main = () => (
	<Provider store={reduxStore}>
		<I18Context>
			<Router>
				<Route exact path='/' component={home.component}/>
			</Router>
		</I18Context>
	</Provider>
)

ReactDOM.render(<Main />, document.getElementById('main'))
