import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

const FunctionContextComponent = () => {

    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const themeStyles = {
        backgroundColor: darkTheme ? '#2c3e50' : '#ecf0f1',
        color: darkTheme ? '#ecf0f1' : '#2c3e50',
        padding: '2rem',
        margin: '2rem',
        maxWidth: '200px'
    }
    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>
                <h1>Function Theme</h1>
            </div>
        </>
    )
}

export default FunctionContextComponent
