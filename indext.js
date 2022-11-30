const { locales } = require('./src/locales/config');
let languages = locales.map(locale => locale.code)
selectedLang = locales[0].code
console.log({selectedLang})
	const selectedLangConfig = locales.find(locale => {
	return locale.code === selectedLang
})
console.log(languages)
console.log(selectedLangConfig)