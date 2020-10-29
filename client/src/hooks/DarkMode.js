// to set up dark mode im am going to need a use effect so it knows when to trigger I also need to bring in local storage so that i 
// can store the instance of the page in the local storage so if you are in dark mode then refresh the page it presists and doesn't
// toggle back to the default style. 

import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export function useDarkMode(){
    const [value,setValue] = useLocalStorage('darkmode')

    useEffect(() =>{
        if (value) {
            window.document.body.classList.add('dark-mode')
        }else{
            window.document.body.classList.remove('dark-mode')
        }
    }, [value])
    return [value,setValue]
}