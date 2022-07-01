import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  mobileSideBar: false,
  onMobileSideBar: () => {},
  changeTheme: () => {},
  savedVideos: [],
  addToSaved: () => {},
  removedFromSaved: () => {},
})

export default ThemeContext
