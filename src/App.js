import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider } from './ThemeContext'
import { useThemeUpdate } from './ThemeContext'

function App() {
  const toggleTheme = useThemeUpdate()
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  )
}

export default App;
