import { defineTheme } from 'pinceau'

export default defineTheme({
    font: {
        sans: '',
        serif: '',
        mono: ''
    },
    color: {
        primary: {
            // '500': '#0284a1'
            '500': '#a10000'
        }
    },
    alpine: {
        body: {
            color: {
                initial: '#101010',
                dark: '#ffffff',
                light: '#101010'
                // primary: {
                //     500: '#0284a1'
                // }
            },
            
            // Update the background color in light & dark mode
            // backgroundColor: {
            //     initial: '#181818',
            //     dark: '#181818'
            // }
        }
    }
})


