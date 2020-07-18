const [darkTheme, setDarkTheme] = useState(true)

const toggleTheme = () => {
  setDarkTheme(prevDarkTheme => !prevDarkTheme)
}