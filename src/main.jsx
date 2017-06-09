import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

const Main = () => (
	<div>
		Hello from DayOne Stack
	</div>
)

ReactDOM.render(<Main />, document.getElementById('main'))
