import React from 'react'
import {
	IntlProvider,
	addLocaleData
} from 'react-intl'
import {
	includes,
	find,
	map
} from 'lodash'
import en from 'react-intl/locale-data/en'
import pl from 'react-intl/locale-data/pl'

addLocaleData([...en, ...pl])
const language = (navigator.languages && navigator.languages[0]) ||
									navigator.language ||
									navigator.userLanguage
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]

const messageFileLoader = require.context('i18n/', false, /\.messages$/);
const loadMessages = (language) => {
	const key = `./${language}.messages`
	if(includes(messageFileLoader.keys(), key)) {
		return messageFileLoader(key)
	}
}

const messages = find(map([language, languageWithoutRegionCode, 'en'], loadMessages))

const I18nContext = ({children}) => (
	<IntlProvider locale={language} messages={messages}>
		{children}
	</IntlProvider>
)

export default I18nContext
