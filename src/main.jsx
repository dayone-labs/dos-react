import 'babel-polyfill'
import 'normalize.css'
import 'main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {
	Route,
	BrowserRouter as Router
} from 'react-router-dom'

import * as home from 'home'

const Main = () => (
	<Router>
		<Route exact path='/' component={home.component}/>
	</Router>
)

ReactDOM.render(<Main />, document.getElementById('main'))
