import React, { Component } from 'react'
import { ThemeContext } from './App'

export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#2c3e50' : '#ecf0f1',
            color: dark ? '#ecf0f1' : '#2c3e50',
            padding: '2rem',
            margin: '2rem',
            maxWidth: '200px'
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>
                        <h1>Class Theme</h1>
                    </div>
                }}
            </ThemeContext.Consumer>
        )
    }
}
