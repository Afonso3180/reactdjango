//import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from '@mui/material'
import Cabecalho from '@/src/components/Cabecalho/Cabecalho'
import tema from '@/src/themes/theme'

export default function App({ Component, pageProps }: AppProps) {
    //return <Component {...pageProps} />
    return (
        <ThemeProvider theme={ tema }>
            <Cabecalho></Cabecalho>
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}
