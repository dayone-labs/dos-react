import React from 'react'
import {FormattedMessage} from 'react-intl'

const Home = () => (
	<div>
		<a href='http://dayone.pl'>
			<img src={require('img/logo.png')} width='120px'/>
		</a>
		<div className='capitalize'>
			<FormattedMessage id='welcome'/>
		</div>
		<h1>
			<a href='http://dayone.pl'>DayOne</a> Stack
		</h1>
	</div>
)

export default Home
