import { createContext, useContext } from 'react';

type Theme ='light'|'dark';
const ThemeContext=createContext<Theme>('dark');

const App=()=>(
    <ThemeContext.Provider value='dark'>
    <MyComponent/>
    </ThemeContext.Provider>
)

const MyComponent=()=>{
    const theme = useContext(ThemeContext);
    return <div>the Theme {theme}</div>
} 