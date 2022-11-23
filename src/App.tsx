import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { PublicationProvider } from './contexts/PostsContext'

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <PublicationProvider>
                    <Router />
                </PublicationProvider>
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    )
}
