import i18next from 'i18next'
import { useState } from 'react'

function LanguageChanger () {
    const [locale, setLocale] = useState(i18next.language)

    function handleLanguageChange() {
        const newLocale = locale === 'en' ? 'ru' : 'en'
        i18next.changeLanguage(newLocale)
        setLocale(newLocale)
    }

    return (
        <img src={`/${locale}.png`} alt={locale} className='w-6 h-6 border-gray-400 border-1 rounded-md' onClick={handleLanguageChange}/>
    )
}

export default LanguageChanger
