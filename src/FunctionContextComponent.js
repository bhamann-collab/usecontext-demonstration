import React, { useContext } from 'react'
import { ThemeContext } from './App'

const FunctionContextComponent = () => {

    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? '#2c3e50' : '#ecf0f1',
        color: darkTheme ? '#ecf0f1' : '#2c3e50',
        padding: '2rem',
        margin: '2rem',
        maxWidth: '200px'
    }
    return (
        <div style={themeStyles}>
            <h1>Function Theme</h1>
        </div>
    )
}

export default FunctionContextComponent
