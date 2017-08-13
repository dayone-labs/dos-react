import React from  'react'
import {
	shallow,
} from 'enzyme'

import Home from './home'

describe('Home component', () => {
	
	test('has a nice DayOne logo rendered', () => {
		const comp = shallow(<Home />)
		expect(comp.find('img')).toBeDefined()
	})
})