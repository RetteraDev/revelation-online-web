import { create } from 'zustand'

interface LanguageState {
    locale: string;
    setLocale: (newLocale: string) => void;
}

const useLanguage = create<LanguageState>((set) => ({
    locale: localStorage.getItem('lang') || 'ru',

    setLocale: (newLocale: string) => {
        localStorage.setItem('lang', newLocale)
        set({ locale: newLocale })
    }
}))

export default useLanguage
