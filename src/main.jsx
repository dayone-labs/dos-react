import 'babel-polyfill'
import 'normalize.css'
import 'main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import {
	Route,
	BrowserRouter as Router
} from 'react-router-dom'
import I18Context from 'i18-context'
import * as home from 'home'

const Main = () => (
	<I18Context>
		<Router>
			<Route exact path='/' component={home.component}/>
		</Router>
	</I18Context>
)

ReactDOM.render(<Main />, document.getElementById('main'))
