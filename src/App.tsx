import React from 'react'
import Layout from './components/Layout'
import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import { GlobalStyles } from './styles/globalStyles'
import { lightTheme, darkTheme } from './styles/themes'
import { useDarkMode } from './util/useDarkMode'

i18n.on('languageChanged', (lng:string) => {
    const languageKey = lng.slice(0, 2)
    window.document.documentElement.lang = languageKey
})

type ThemeType = typeof lightTheme

function App() {
    const [theme, toggleTheme, isComponentMounted] = useDarkMode()
    const themeMode = theme === 'light' ? lightTheme : darkTheme

    if (!isComponentMounted) return <div />

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <I18nextProvider i18n={i18n}>
                <Layout
                    toggleTheme={toggleTheme}
                />
            </I18nextProvider>
        </ThemeProvider>
    )
}

export type { ThemeType }
export default App
